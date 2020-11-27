var express = require('express');
var router = express.Router();
var Message = require("../models/messages");

/* GET home page. */
router.get('/',async function(req, res, next) {
  let messages =await Message.find();
  res.render('messages/list',{title: "Admin Access", messages});

});

router.get('/add',async function(req, res, next) {
  res.render('messages/add');
});

// Store Data In Mongo DB
router.post('/add',async function(req, res, next) {
  let message= new Message();
  message.user_to = req.body.to_user;
  message.user_from = req.body.from_user;
  message.body = req.body.message;
  var today= new Date();
  message.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  message.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  message.opened = false;
  message.viewed = false;
  message.deleted = false;
  await message.save();

  res.redirect('/messages');
});

// trash the messages
router.get('/trash/:id',async function(req, res, next) {
  let message = await Message.findById(req.params.id);
  message.deleted = true;
  await message.save();
  res.redirect('/messages');
});

router.get('/deleted',async function(req, res, next) {
  let messages =await Message.find();
  res.render('messages/trash',{title: "Deleted Messages", messages});

});
// Delete All Messages Permanently
router.get('/deleteall',async function(req, res, next) {
  await Message.deleteMany({deleted: true});
  res.redirect("/messages")

});

// Permanent Delete
router.get('/delete/:id',async function(req, res, next) {
  await Message.findByIdAndDelete(req.params.id);
  res.render('/messages');
});

module.exports = router;
