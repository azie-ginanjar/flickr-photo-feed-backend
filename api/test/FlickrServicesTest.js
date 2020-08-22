const expect = require('chai').expect;
// import math file
import FlickrServices from "../server/services/FlickrServices";

const _ = require('lodash');

describe('FlickrServices.js tests', () => {
  describe('utils.getPhotosService with beach or sunset tags Test', () => {
    it('all returned item should be tagged by beach or sunset', () => {
      FlickrServices.getPhotosService(
        'beach,sunset'
      ).then(response => {
        _.forEach(response, value => {
          expect(value.categories).to.include.members(['beach', 'sunset']);
        })
      }).catch(reason => {
        throw reason;
      });
    });
  });
});