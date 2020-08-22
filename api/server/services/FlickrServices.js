import FlickrUtils from "../utils/FlickrUtils";

const _ = require('lodash');

class FlickrServices {
  /**
   * @param {string} tags
   */
  static getPhotosService(tags=null) {
    let result = (resolve, reject) => {
      FlickrUtils.getPhotosPublicFeed(
        tags
      ).then(response => {
        const flattenResponse = _.flatMap(response.items, (item) => {
          const { title, author, link, description, categories } = item;
          return {
            title,
            author,
            link,
            description: description.split('</p>')[2].replace(/\n/g,'').replace('<p>', ''),
            categories,
            buddyicon: item['atom:author']['flickr:buddyicon']['#']
          };
        });
        resolve(flattenResponse);
      }).catch(reason => {
        reject(reason);
      });
    };

    return new Promise(result);
  }
}

export default FlickrServices;