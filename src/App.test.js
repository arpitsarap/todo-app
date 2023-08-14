const { expect } = require("chai");
const axios = require("axios");
require("dotenv").config();

describe("post request", function (done) {
  it("should validate the response of the API", async () => {
    try{
        const api_url ="https://gi5ykvamzi.execute-api.us-west-2.amazonaws.com/dev/"; 

        console.log(api_url)
    
        const response = await axios.post(api_url, {
          key1: "test",
          method: "POST",
        });
    
        expect(response.status).to.equal(200);
    }
    catch(error){
        throw error
    }
  });
});

describe("GET Data request",function(done){
  it("should validate the response of API", async() => {
    try {
      const api_url = "https://gi5ykvamzi.execute-api.us-west-2.amazonaws.com/dev/";

      console.log(api_url);

      const response = await axios.post(api_url, {
        method: "GET",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});