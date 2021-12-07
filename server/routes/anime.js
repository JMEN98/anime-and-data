import express from 'express'
import { Anime } from '../models'


const router=express.Router()

router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint')

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
})


module.exports = router