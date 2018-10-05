/**
 * Register a service worker.
 * Code taken and modified from
 * https://developers.google.com/web/fundamentals/primers/service-workers/
 * and the Udacity Offline First course
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(registration) {
        // Case 1: There is no service worker currently controlling this page.
        // This means that the user is already currently viewing the latest
        // version of this webpage, so exit this promise immediately.
        if (!navigator.serviceWorker.controller) {
          return;
        }

        // Case 2: There's an updated service worker already waiting.
        // Respond by triggering the update notification to show to the user.
        if (registration.waiting) {
          updateReady(registration.waiting);
          return;
        }

        // Case 3: There's an updated service worker currently installing.
        // Respond by tracking its progress and listening for its state changes.
        // When the service worker finishes installing (i.e. when its state
        // becomes 'installed'), then trigger the update notification to show to the
        // user.
        if (registration.installing) {
          trackInstalling(registration.installing);
          return;
        }

        // Case 4: There are no currently installing service workers.
        // Listen for new installing service workers to arrive.
        // If one arrives, track its progress.
        // If it becomes 'installed', call updateReady()
        registration.addEventListener('updatefound', function() {
          trackInstalling(registration.installing);
        });

        // Case 5: service worker's .skipWaiting() was called, meaning the service
        // worker controlling the page has changed.
        // Respond to this by reloading the page.
        // Ensure refresh is only called once.
        // This works around a bug in "force update on reload".
        let refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', function() {
          if (refreshing) return;
          window.location.reload();
          refreshing = true;
        });

        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

/**
 * Display a notification to the user to update the webpage.
 * Refresh button will update the service worker and reload the webpage.
 * Dismiss will hide the notification.
 */
function updateReady(worker) {
  // Create the update notification section to display on the webpage
  createUpdateNotificationHTML();

  const UPDATE_SECTION = document.getElementById('update-site-notification');
  UPDATE_SECTION.addEventListener('click', function(event) {
    // If the user hits the refresh button, then tell the service worker to
    // update immediately (and then refressh the page)
    if (event.target.classList.contains('refresh-button')) {
      // Delte the update notification html
      deleteHTML(UPDATE_SECTION);
      // Tell the service worker to update immediately (and then refresh the page)
      worker.postMessage({
        action: 'skipWaiting'
      });
    }
    // Otherwise, if the user clicks the dismiss button, then delete the update
    // notification html
    else if (event.target.classList.contains('dismiss-button')) {
      deleteHTML(UPDATE_SECTION);
      return;
    }
  });
};

/**
 * Track the installation progress of a currently installing service worker.
 * When the service worker finishes installing (i.e. when its state becomes
 * 'installed'), then trigger the update notification to show to the user.
 */
function trackInstalling(worker) {
  worker.addEventListener('statechange', function() {
    if (worker.state == 'installed') {
      updateReady(worker);
    }
  });
};

/**
 * Create the section that displays the update notification
 */
function createUpdateNotificationHTML() {
  let updateSection = document.createElement('section');
  updateSection.id = 'update-site-notification';

  let updateDiv = document.createElement('div');

  let updateTextP = document.createElement('p');
  updateTextP.innerText = 'New version available';

  let refreshButton = document.createElement('button');
  refreshButton.innerText = 'Refresh';
  refreshButton.classList.add('refresh-button');

  let dismissButton = document.createElement('button');
  dismissButton.innerText = 'Dismiss';
  dismissButton.classList.add('dismiss-button');

  updateDiv.append(updateTextP);
  updateDiv.append(refreshButton);
  updateDiv.append(dismissButton);

  updateSection.append(updateDiv);

  let firstDOMElement = document.querySelector('.skip-link');
  document.body.insertBefore(updateSection, firstDOMElement);
}

/**
 * Delete the update notification section
 */
function deleteHTML(element) {
  element.parentNode.removeChild(element);
}