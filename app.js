require ('dotenv').config();

const { TwitterApi } = require('twitter-api-v2');
const API_KEY = process.env.API_KEY ?? '';
const API_SECRET = process.env.API_SECRET ?? '';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN ?? '';
const ACCESS_SECRET = process.env.ACCESS_SECRET ?? '';

module.exports = new TwitterApi ({
    appKey: API_KEY,
    appSecret: API_SECRET,
    accessToken: ACCESS_TOKEN,
    accessSecret: ACCESS_SECRET
})



