Declarations & Requires
const express = require('express');
const router = express.Router();
const Heywhatson = require('../models/Heywhatson.js');

÷
// //Show all playlists
// router.get('/', (req, res)=>{
//     Heywhatson.find({}, (err, foundItems)=>{
//         res.json(foundItems);
//     });
// });
//
// //Post a playlist
// router.post('/', (req, res)=>{
//   console.log(req.body)
//     Heywhatson.create(req.body, (err, createdItem)=>{
//         res.json(createdItem);
//     });
// });
//
// //Delete a playlist
// router.delete('/:id', (req, res)=>{
//     Heywhatson.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
//         res.json(deletedItem);
//     });
// });
//
// //Update a playlist
// router.put('/:id', (req, res)=>{
//     Heywhatson.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
//         res.json(updatedItem);
//     });
// });

module.exports = router;
