    /*
        all four of these veriables below should be kept secure
    */
    // client id and secret come from making a 'script' app at this site https://www.reddit.com/prefs/apps
    const clientId = process.env.REDDITAPI
    const clientSecret = process.env.REDDITSECRET

    // this is the developers reddit uid and pwd. as if they were logging into reddit site.
    const uid = process.env.REDDITUID
    const pwd = process.env.REDDITPWD

    module.exports = {
        clientId,
        clientSecret,
        uid,
        pwd,
    }