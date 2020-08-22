import FlickrServices from "../services/FlickrServices";
import Util from '../utils/Utils';

const util = new Util();

class FlickrControllers {
  static async getAllRecentPhotos(req, res) {
    const tags = req.query.tags;
    FlickrServices.getPhotosService(
      tags
    ).then(response => {
      if(response.length > 0) {
        util.setSuccess(200, 'photos retrieved', response);
      } else {
        util.setSuccess(200, 'no photos found', []);
      }
      return util.send(res);
    }).catch(reason => {
      util.setError(400, reason);
      return util.send(res);
    });
  }
}

export default FlickrControllers;