const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    require: true
  },

  lastName: {
    type: String,
    require: true
  },

  Email: {
    type: String,
        require: true,
        // lowercase: true,
        // unique: true,
        // required: 'Email address is required',
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
});

module.exports = mongoose.model('posts', PostSchema);
