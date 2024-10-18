const { Given, When, Then } = require('@wdio/cucumber-framework');

const ApiTestPage = require('../pageobjects/api-test.page.js');

When('Retrieve GET request to api {string} with parameter {string}', async (end_point,param) => {
    await ApiTestPage.hitApiUsingGetMethod(end_point,param);
});

Then('GET status should be {int}', async (status) => {
    await ApiTestPage.checkApiStatus(status)
});