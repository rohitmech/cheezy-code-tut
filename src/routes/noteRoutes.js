const express = require('express');
const noteController = require("../Controllers/noteController.js");
const  auth  = require("../../middlewares/auth.js");
const noteRouter = express.Router();

noteRouter.get("/", auth, noteController.getNotes);
noteRouter.post("/", auth, noteController.createNote);
noteRouter.delete("/:id", auth, noteController.deleteNote);
noteRouter.put("/:id", auth, noteController.updateNote);

module.exports = noteRouter;