const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const GetData = require('../models/GetData');

router.get('/', (req, res) => {
  //res.send('we are on posts');
  res.sendFile(__dirname + "/index.html");
});


router.post('/', (req, res) => {
   console.log(req.body);

    const post = new GetData({
    _id:new mongoose.Types.ObjectId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    Email: req.body.Email
  });

  post.save()
  .then(result => {
    console.log(result);
    res.status(200).json({newGetData:result
    })
  })

  .catch(err =>{
    console.log(err);
    res.status(500).json({message: err});
  });
})





module.exports = router;
