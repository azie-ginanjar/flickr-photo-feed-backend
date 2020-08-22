import FlickrUtils from "../utils/FlickrUtils";

class FlickrServices {
  /**
   * @param {string} tags
   */
  static getPhotosService(tags=null) {
    let result = (resolve, reject) => {
      FlickrUtils.getPhotosPublicFeed(
        tags
      ).then(response => {
        resolve(response.items);
      }).catch(reason => {
        reject(reason);
      });
    };

    return new Promise(result);
  }
}

export default FlickrServices;