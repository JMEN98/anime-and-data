import mongoose from "mongoose";

const  { ObjectId } = mongoose.Schema.Types;

const animeSchema = new .Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },

  year: {
    type: String,
    require: true,
  },
  genres:{
   type:String 
  },
  maincharater:{
  type:String
  }
});

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;