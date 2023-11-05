const BookModel = require("../models/book.model");

module.exports.getBooks = async (req, res) => {
  const book = await BookModel.find();
  res.status(200).json(book);
};

module.exports.setBooks = async (req, res) => {
  if (!req.body.book_title) {
    return res.status(400).json({ message: "Body is empty !" });
  }

  const book = await BookModel.create({
    book_id: req.body.book_id,
    book_title: req.body.book_title,
    book_authors: req.body.book_authors,
    book_publisher: req.body.book_publisher,
    book_published_date: req.body.book_published_date,
    book_description: req.body.book_description,
    book_isbn_13: req.body.book_isbn_13,
    book_page_count: req.body.book_page_count,
    book_thumbnail: req.body.book_thumbnail,
    book_likers: req.body.book_likers,
    book_i_have: req.body.book_i_have,
    book_i_read: req.body.book_i_read,
  });
  res.status(200).json(book);
};

module.exports.editBooks = async (req, res) => {
  const book = await BookModel.findById(req.params.id);
  if (!book) {
    return res.status(400).json({ message: "This book does not exist" });
  }

  const updateBook = await BookModel.findByIdAndUpdate(book, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
};

module.exports.deleteBooks = async (req, res) => {
  const book = await BookModel.findById(req.params.id);
  if (!book) {
    return res.status(400).json({ message: "This book does not exist" });
  }
  await book.remove();
  res.status(200).json("Book deleted" + req.params.id);
};

module.exports.likeBooks = async (req, res) => {
  try {
    await BookModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { book_likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports.dislikeBooks = async (req, res) => {
  try {
    await BookModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { book_likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    return res.status(400).json(error);
  }
};
