const expect = require('chai').expect;

const config = require('../config')
const reddit = require('../reddit');

describe('reddit', function() {
    describe('access_token', function() {
        it('should return valid token', function() {
            return reddit.access_token(config).then(function(access_token){
                expect(access_token).to.not.be.undefined
            })
            
        })
    })  

    describe('me.name', function(){
        it('should be JheredParnell', async function(){
            let {access_token} = await reddit.access_token(config)
            return reddit.me({access_token}).then(function(respData){
                expect(respData.name).to.equal('JheredParnell')
            })
        })
    }) 
  
})
