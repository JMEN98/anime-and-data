import mongoose from 'mongoose'
const {OjectId} =mongoose.Schema.Types

const animeSchema  = new mongoose.Schema({
 title:{
   Type:String
 },
  year:{
    Type:String
  },
  genres:{
    Type:String
  },
  maincharater:{
  Type:String
  }
})
const  Anime= mongoose.model("Anime", animeSchema);
export default Anime
