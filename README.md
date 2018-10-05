# Restaurant Reviews Enhancement

## Table of Contents

* [Description](#description)
* [How to Run the Web App](#how-to-run-the-web-app)
* [Minimum Requirements](#minimum-requirements)
* [Extra Features](#extra-features)
* [Resources Used](#resources-used)

## Description

[An unresponsive and inaccessibly designed website feature reviews of various restaurants in New York City](https://github.com/udacity/mws-restaurant-stage-1) was given. In this project, I tackled the static webpages given and improved them to become responsive on various display sizes, become much more accessible to screen reader users and users with lower visual acuity, and begin becoming a progressive web application by caching the site’s assets for offline use using a service worker.

## How to Run the Web App

1. Download the repository.
2. Open a command prompt terminal and cd (change into the directory) where the repository has been saved.
3. Install all the needed npm dependencies using the following command:
    * `npm install`
    * Note: node.js can be downloaded [here](https://nodejs.org/en/download/) and npm can subsequently be installed using the instructions found [here](https://www.npmjs.com/get-npm)
4. Set up a simple HTTP server. If you have python installed, this can be run using the following command:
    * Python 2.x: `python -m SimpleHTTPServer 8000`
    * Python 3.x: `py -3 -m http.server 8000`
    * Note: to check which version of python you have installed, run: python -v
    * Note: python can be downloaded [here](https://www.python.org/)
5. While the server is running in the background, browse the website at: [http://localhost:8000](http://localhost:8000)

## Minimum Requirements

The minimum requirements of this project involved updating the code to fix the following problems while maintaining the already included functionality of the site:
* Make the website responsive:
  * Ensure the website’s content is always visible and displays nicely on various sized devices including desktop, tablet, and mobile devices.
  * Make the images responsive in terms of size of the image vs. size of the viewport without overlapping or intruding upon other elements on the page.
  * Make sure that all application elements are visible and usable on all viewport sizes.
* Make the website accessible:
  * Ensure that all content-related images come with suitable alternate text which properly describes the contents of these images.
  * Manage focus appropriately so that users can easily and noticeably tab through all the important elements on the webpage.
  * Ensure that focus is only trapped where necessary and is otherwise escapable.
  * Ensure that semantic elements are used wherever appropriate.
  * Use ARIA roles for those elements that do not have a proper semantic element to define themselves.
* Make the website available offline:
  * In browsers that support service workers, register and make use of a service worker to cache the responses returned from the requests made for the site’s assets so that when there is no network access, the user can view any previously visited pages easily while offline.

## Extra Features

Extra features that were added to the web app included:
* Reorganize, comment, and clean up HTML and CSS files.
* Implement a flexbox grid where applicable.
* Use the picture element with a srcset and sizes attributes for each image so that the resolution of the image uploaded is dependent upon the device pixel ratio of the user’s device and the current viewport size in order to load images at a faster rate.
* Implement grunt to easily create a new folder of all source images copied and resized to particular resolutions using the command prompt terminal.
* Enable keyboard interactivity for the map markers.
* Add a skip link for keyboard who are tabbing through the page. The skip link enables users to skip the header and map sections and tab directly to the map filtering section.
* Add detailed headings where appropriate to act as landmarks for screen reader users.
* Changing the color palette so that the text/background color combinations meet Web Content Accessibility Guidelines (WCAG) Criterion 1.4.6 so that users with lower visual acuity may still be able to read the content on the website.
* Create and display a notification on the homepage when the service worker updates so that the user can just click the refresh button to update the service worker and reload the page or click the dismiss button to hide the notification.
* Cache a skeleton HTML page so that if the user tries to visit a not previously visited page while offline, he/she will be presented with a webpage that show’s the site’s header, footer and a custom error message.

## Resources Used

* [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/ )
* [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)