const { expect: wdioExpect , $ } = require('@wdio/globals');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const plugins = require('../../../../support/plugins');
const axios = require('axios').default;

chai.use(chaiAsPromised);
const expect = chai.expect;

class ApiTestPage {
    async hitApiUsingGetMethod(end_point,param) {
        const envUrl = "https://petstore.swagger.io/v2";
        const apiUrl = `${envUrl}${end_point}${param}`

        try {
            const response = await axios.get(apiUrl);
            global.temp_value['status'] = response.status;
        } catch (error) {
            console.log(error);
        }
    }

    async checkApiStatus(status) {
        expect(global.temp_value['status']).to.equal(status);
        console.log('response status = test '+ global.temp_value['status']);
    }
}

module.exports = new ApiTestPage();