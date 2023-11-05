const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    book_id: {
      type: String,
    },
    book_title: {
      type: String,
    },
    book_authors: {
      type: String,
      //   required: true,
    },
    book_publisher: {
      type: String,
    },
    book_published_date: {
      type: String,
    },
    book_description: {
      type: String,
    },
    book_isbn_13: {
      type: String,
    },
    book_page_count: {
      type: Number,
    },
    book_thumbnail: {
      type: String,
    },
    book_likers: {
      type: [String],
    },
    book_i_have: {
      type: Boolean,
    },
    book_i_read: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);
