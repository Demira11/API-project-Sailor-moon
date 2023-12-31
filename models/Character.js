import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CharacterSchema = new Schema({
  
  name: { type: String },
  japaneseName: { type: String },
  englishName: { type: String },
  moon: { type: String },
  image: { type: String },
  
});

export default mongoose.model("characters", CharacterSchema);