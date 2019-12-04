const app = require('../app')
const chai = require('chai')
const request = require('supertest')

describe('GET /', function() {
  it('# main', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          done(err)
          return
        }

        chai.expect(res.body).to.have.property('hello')
        
        done()
      })
  })
})