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

    let result = await reddit.userAbout({username:'Russ14nb0t',access_token});
    console.log('userAbout', JSON.stringify(result,null,2))

    let result3 = await reddit.top({access_token});
    console.log('top---\n', JSON.stringify(result3,null,2))

    //just take a post and get it specifically.
    let result2 = await reddit.by_id({names: 't3_cjmnoj', access_token});
    console.log('by_id----\n', JSON.stringify(result2,null,2))
}

main();
