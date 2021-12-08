import express from 'express'
import { Anime } from '../models'


const router=express.Router()

router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint Anime')

})

router.get('/album',  async (req, res, next) => {
  let anime = await Anime.find({}).sort({ title:1}).exec();
 
 
   console.log(anime)
   
   
   res.send(anime)
 })
router.post('/anime',(req,res,next)=> {
const [title,year,genres,maincharater]=req.boby
const post = new post({
title:title,
year:year,
genres:genres,
maincharater:maincharater



})

const saveAnime =await post.save()
res.json(saveAnime.toJson())
});


module.exports = router