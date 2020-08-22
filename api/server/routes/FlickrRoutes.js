import { Router } from 'express';
import FlickrControllers from "../controllers/FlickrControllers";

const router = Router();

router.get('/', FlickrControllers.getAllRecentPhotos);

export default router;