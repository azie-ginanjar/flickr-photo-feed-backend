const utils = require ("daveutils");
const feedRead = require ("davefeedread");

class FlickrUtils {
  /**
   * @param {string} tags
   */
  static getPhotosPublicFeed(tags=null) {
    let result = (resolve, reject) => {
      let feedUrl = 'https://www.flickr.com/services/feeds/photos_public.gne';

      if (tags !== null) {
        feedUrl = `https://www.flickr.com/services/feeds/photos_public.gne?tags=${tags}`;
      }

      feedRead.parseUrl(feedUrl, 10, (err, feed) =>{
        if(err) {
          reject(err);
        } else {
          resolve(feed);
        }
      })
    };
    return new Promise(result);
  };
}

export default FlickrUtils;