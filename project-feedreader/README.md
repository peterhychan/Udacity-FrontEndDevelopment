# FeedReader Testing Project

In this project, I wrote test suites for a web-based application that reads RSS feeds by [Jasmine](http://jasmine.github.io/). 


## Table of Contents
* [Instructions](#instructions)
* [Project contents](#project-contents)
* [Contributing](#contributing)
* [The logic behind testing suites](#logic-behind)
* [Contributing](#contributing)
* [Tests](#Tests)

## Instructions

To check the result,  download the contents of the repository and open `index.html` in your internet browser. The test results are at the bottom of the page.

## Project contents

The project is structured as followed:

* main folder contains the  index.html page of the web-based application, README amd other technical files
* `/css` folder contains the styling of the page
* `/font` folder contains the font used for the application
* `/js` folder contains the javascript documents describing the functions of the application as well as minified version of the jQuery library
* `/jasmine` folder contains the testing suite written in javascript (at `/spec` ) documents testing the functions of the application as well as the jasmine library(at `/lib`)
* `/img` folder contains the background image

## The logic behind testing suites

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## Contributing

This file is for the project of Udacity Front End Web development nanodegree.


## Tests

RSS Feeds:

1. Feeds are defined
2. URL is non-empty
3. Feed names are non-empty

The Menu:
1. The menu is hidden by default
2. The menu changes visibility with clicks

Initial Entries:
1. Feed container has an entry or more

New Feed Selection:
1. Feed content changes when different feeds are clicked or selected


