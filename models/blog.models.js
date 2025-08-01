const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: 'Anonymous',
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
