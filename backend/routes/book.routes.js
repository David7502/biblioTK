const express = require("express");
const { setBooks } = require("../controllers/book.controller");
const { getBooks } = require("../controllers/book.controller");
const { editBooks } = require("../controllers/book.controller");
const { deleteBooks } = require("../controllers/book.controller");
const { likeBooks } = require("../controllers/book.controller");
const { dislikeBooks } = require("../controllers/book.controller");
const router = express.Router();

router.get("/", getBooks);

router.post("/", setBooks);

router.put("/:id", editBooks);

router.delete("/:id", deleteBooks);

router.patch("/like-book/:id", likeBooks);

router.patch("/dislike-book/:id", dislikeBooks);

module.exports = router;
