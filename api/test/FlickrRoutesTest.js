import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const {expect} = chai;

const _ = require('lodash')

describe('Testing the photo endpoints:', () => {
  it('It should retrieve book list from flickr API', (done) => {
    chai.request(app)
      .get('/api/v1/photo')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('photos retrieved')
        res.body.data[0].should.have.property('author');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('link');
        res.body.data[0].should.have.property('description');
        res.body.data[0].should.have.property('buddyicon');
        res.body.data[0].should.have.property('categories');
        done();
      });
  });
  it('It should return empty arrays when tags not found', (done) => {
    chai.request(app)
      .get('/api/v1/photo?tags=invalid_tags_jbasdaf1723')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('no photos found')
        expect(res.body.data).to.be.an('array').that.is.empty;
        done();
      });
  });
  it('It should return photos with right tags', (done) => {
    chai.request(app)
      .get('/api/v1/photo?tags=beach,sunset')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('photos retrieved')

        _.forEach(res.body.data, value => {
          expect(value.categories).to.include.members(['beach', 'sunset']);
        })
        done();
      });
  });
});