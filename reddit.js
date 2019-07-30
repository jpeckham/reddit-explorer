const axios = require('axios')
const qs = require('querystring');


const access_token = async function(params) {
    let resp = await axios
    .post(
        'https://www.reddit.com/api/v1/access_token',
        qs.stringify({
            grant_type: 'password',
            username: params.uid,
            password: params.pwd
        }),
        {
            auth: { username: params.clientId, password: params.clientSecret }
        })
    .catch(function (err) { throw err })
    
    return resp.data
}

const me = async function(params){
    //note when using bearer tokens you then go to oauth.reddit.com
    resp = await axios
        .get('https://oauth.reddit.com/api/v1/me',
            {
                headers: {
                    Authorization: 'bearer '+ params.access_token
                }
            })
        .catch(function (err) { throw err })
    
    return resp.data
}

const userAbout = async function(params){
    //note when using bearer tokens you then go to oauth.reddit.com
    resp = await axios
        .get(`https://oauth.reddit.com/user/${params.username}/about`,
            {
                headers: {
                    Authorization: 'bearer '+ params.access_token
                }
            })
        .catch(function (err) { throw err })
    
    return resp.data
}
const by_id = async function(params){
    //note when using bearer tokens you then go to oauth.reddit.com
    resp = await axios
        .get(`https://oauth.reddit.com/by_id/${params.names}`,
            {
                headers: {
                    Authorization: 'bearer '+ params.access_token
                }
            })
        .catch(function (err) { throw err })
    
    return resp.data
}
const top = async function(params){
    //note when using bearer tokens you then go to oauth.reddit.com
    resp = await axios
        .get(`https://oauth.reddit.com/top`,
            {
                headers: {
                    Authorization: 'bearer '+ params.access_token
                }
            })
        .catch(function (err) { throw err })
    
    return resp.data
}

module.exports = {
    access_token,
    me,
    userAbout,
    by_id,
    top
}