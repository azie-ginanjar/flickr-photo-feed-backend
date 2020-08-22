const expect = require('chai').expect;
// import math file
import FlickrUtils from "../server/utils/FlickrUtils";

const _ = require('lodash');

describe('FlickrUtils.js tests', () => {
  describe('getPhotosPublicFeed without tags Test', () => {
    it('head title should return from everywhere', () => {
      FlickrUtils.getPhotosPublicFeed(

      ).then(response => {
        expect('Uploads from everyone').to.equal(response.head.title);
        expect('https://www.flickr.com/photos/').to.equal(response.head.link);
      }).catch(reason => {
        throw reason;
      });
    });
  });
  describe('getPhotosPublicFeed with beach or sunset tags Test', () => {
    it('head title should contains beach and sunset and all returned item tagged by beach or sunset', () => {
      FlickrUtils.getPhotosPublicFeed(
        'beach,sunset'
      ).then(response => {
        expect(response.head.title).to.have.string('beach');
        expect(response.head.title).to.have.string('sunset');

        _.forEach(response.items, value => {
          expect(value.categories).to.include.members(['beach', 'sunset']);
        })
      }).catch(reason => {
        throw reason;
      });
    });
  });
});