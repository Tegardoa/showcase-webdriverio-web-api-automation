const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const axios = require('axios').default;

chai.use(chaiAsPromised);
const expect = chai.expect;

const token = "Bearer 309fdbd60edafa8db4bb348cdef5750ffed8f871915ef4f4a3ce6cb9abda42cf";

class ApiTestPage {
    async hitApiUsingPostMethod(end_point,name,email) {
        const envUrl = "https://gorest.co.in/";
        const apiUrl = `${envUrl}${end_point}`;
        let payload = {
            name: name,
            email: email,
            gender: 'male',
            status: 'active'
        };

        let headers = {
            headers: {
                'Authorization': token
            }
        };

        try {
            const response = await axios.post(apiUrl, payload, headers);
            global.temp_value['status']=response.status;
            global.temp_value['unique_id']=response.data.id;
            global.temp_value['name']=response.data.name;
            global.temp_value['email']=response.data.email;
            global.temp_value['gender']=response.data.gender;
            global.temp_value['status-active']=response.data.status;
        } catch (error) {
            console.log(error);
            throw new Error ('Fail to POST api');
        }
    }

    async hitApiUsingGetMethod(end_point,param) {
        const envUrl = "https://gorest.co.in/";
        const apiUrl = `${envUrl}${end_point}${global.temp_value[param]}`
        let headers = {
            headers: {
                Authorization: token
            }
        }

        try {
            const response = await axios.get(apiUrl,headers);
            global.temp_value['status']=response.status;
            global.temp_value['name']=response.data.name;
            global.temp_value['email']=response.data.email;
            global.temp_value['gender']=response.data.gender;
            global.temp_value['status-active']=response.data.status;
        } catch (error) {
            console.log(error);
            throw new Error ('Fail to GET api');
        }
    }

    async validateApiStatus(status) {
        try {
            expect(global.temp_value['status']).to.equal(status);
            console.log('response status = test '+ global.temp_value['status']);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async validateData(param,value) {
        try {
            expect(global.temp_value[`${param}`]).to.equal(global.temp_value[`${value}`]);
            console.log('param '+ global.temp_value[`${param}`] + ' value  '+ global.temp_value[`${value}`]);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async hitApiUsingPutMethod(end_point,param,name,email) {
        const envUrl = "https://gorest.co.in/";
        const apiUrl = `${envUrl}${end_point}${global.temp_value[param]}`
        let payload = {
            name: name,
            email: email,
            gender: 'female',
            status: 'inactive'
        };

        let headers = {
            headers: {
                'Authorization': token
            }
        };

        try {
            const response = await axios.put(apiUrl, payload, headers);
            global.temp_value['status']=response.status;
            global.temp_value['unique_id']=response.data.id;
            global.temp_value['name']=response.data.name;
            global.temp_value['email']=response.data.email;
            global.temp_value['gender']=response.data.gender;
            global.temp_value['status-active']=response.data.status;
            global.temp_value['id']=response.data.id;
        } catch (error) {
            console.log(error);
            throw new Error ('Fail to PUT api');
        }
    }
}

module.exports = new ApiTestPage();