import express from 'express';
import bodyParser from 'body-parser';
import flickrRoutes from './server/routes/FlickrRoutes';

const app = express();
const env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = process.env.PORT || 8000;
if (env === 'test'){
  port = 8080;
}

app.use('/api/v1/photo', flickrRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;