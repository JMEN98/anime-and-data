import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const animeSchema = new mongoose.Schema({
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

const Anime = mongoose.model("Album", animeSchema);

export default Anime;