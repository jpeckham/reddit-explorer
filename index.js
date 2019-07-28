/*
    from quickstart https://github.com/reddit-archive/reddit/wiki/OAuth2-Quick-Start-Example
*/

const config = require('./config')
const reddit = require('./reddit')

const main = async function () {
    const { access_token } = await reddit.access_token(config);
    console.log('access_token.access_token', access_token)

    const { name } = await reddit.me({access_token});
    console.log('me.name', name)
}

main();
