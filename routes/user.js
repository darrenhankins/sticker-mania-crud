const express = require('express'); // db connection
const router = express.Router();
const User = require('../db/user');
const Sticker = require('../db/sticker');

// make sure `id` is a valid number (if not respond with an error)
// look up user from db with `id`
// verifiy we actually got user back from db
// if `yes` respond with user, if `no` respond with `404`

router.get('/:id', (req,res)=> {
  if(!isNaN(req.params.id)) {
    User.getOne(req.params.id).then(user => {
      if(user) {
        res.json(user);
      } else {
        resError(res, 404, 'User Not Found');
      }
    });
  } else {
    resError(res, 500, 'Invalid ID');
  }
});

router.get('/:id/sticker', (req,res)=>{
  if(!isNaN(req.params.id)) {
    Sticker.getByUser(req.params.id).then(stickers => {
      if(stickers.length > 1) {
        res.json(stickers);
      } else {
        res.status(400);
        res.json(stickers);
      }
    });
  } else {
    resError(res, 500, 'Invalid ID');
  }
});

function resError(res,statusCode,message) {
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
