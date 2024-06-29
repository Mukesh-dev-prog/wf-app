# WF App

This is a Nodejs Application for checking whether the current date (today) is the public holiday in the US or not.

## Steps to run it

1. Make sure that nodejs is installed.
2. Run `node --version` to make sure the nodejs latest version is installed.
3. Go to the parent directory (WF) and run the `npm install` to install all the dependencies.
4. Run `node index.js` for starting the web application.
5. Make sure to run the `/update` to update the cache and run the `/check` to check the current date is a public holiday or not.


## Available Apis
* `/list`: This gives the response of the third party API.
* `/update`: This will update the cache for the current year.
* `/check`: This will check whether the current date is a public holiday or not.