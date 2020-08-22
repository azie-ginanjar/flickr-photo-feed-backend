# flickr-photo-feed-backend

[![Build Status](https://travis-ci.org/azie-ginanjar/flickr-photo-feed-backend.svg?branch=master)](https://travis-ci.org/azie-ginanjar/flickr-photo-feed-backend)
[![Coverage Status](https://coveralls.io/repos/github/azie-ginanjar/flickr-photo-feed-backend/badge.svg?branch=master)](https://coveralls.io/github/azie-ginanjar/flickr-photo-feed-backend?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/9bcd52f1c05c434001fb/maintainability)](https://codeclimate.com/github/azie-ginanjar/flickr-photo-feed-backend/maintainability)

## How to run locally
- Run `yarn install`
- Run `yarn dev`
- This application should be run on http://localhost:8000/. Access this endpoint with get if you get `{"message":"Welcome to this API."}`, then you're good.
- To retrieve most recent uploaded public photo from flickr use `http://localhost:8000/api/v1/photo?tags=your_tags`.
If you expect multiple tags, then separate your tags with comma, for example `http://localhost:8000/api/v1/photo?tags=beach,sunset`