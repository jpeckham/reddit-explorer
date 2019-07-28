const expect = require('chai').expect;

const config = require('../config')
const reddit = require('../reddit');

describe('oauth', function() {
    describe('reddit', function() {
        it('should not be undefined', function() {
            expect(reddit).is.not.undefined
        })
        describe('access_token', function() {
            it('should return valid token', async function() {
                const {access_token} = await reddit.access_token(config)
                expect(access_token).to.not.be.undefined
            })
        })
    })
});