const { Given, When, Then } = require('@wdio/cucumber-framework');
const plugins = require('../../../../support/plugins.js');

const ApiTestPage = require('../pageobjects/api-test.page.js');

When('Execute POST request to api {string} with payload name {string} and email {string}', async (end_point,name,email) => {
    global.temp_value[`${name}`] = `User Name ${plugins.generateUniqueNumber()}`;
    global.temp_value[`${email}`] = `email.${plugins.generateUniqueNumber()}@shopee.id`;
    name = `${global.temp_value[name]}`;
    email = `${global.temp_value[email]}`;
    await ApiTestPage.hitApiUsingPostMethod(end_point,name,email);
});

Then('POST status should be {int}', async (status) => {
    await ApiTestPage.validateApiStatus(status)
});

When('Retrieve GET request to api {string} with parameter {string}', async (end_point,param) => {
    await ApiTestPage.hitApiUsingGetMethod(end_point,param);
});

Then('GET status should be {int}', async (status) => {
    await ApiTestPage.validateApiStatus(status)
});

Then('{string} should be {string}', async (param,value) => {
    await ApiTestPage.validateData(param,value)
});

When('Execute PUT request to api {string} with parameter {string} and payload name {string} and email {string}', async (end_point,param,name,email) => {
    global.temp_value[`${name}`] = `User Name ${plugins.generateUniqueNumber()}`;
    global.temp_value[`${email}`] = `email.${plugins.generateUniqueNumber()}@shopee.id`;
    name = `${global.temp_value[name]}`;
    email = `${global.temp_value[email]}`;
    await ApiTestPage.hitApiUsingPutMethod(end_point,param,name,email);
});

Then('PUT status should be {int}', async (status) => {
    await ApiTestPage.validateApiStatus(status)
});