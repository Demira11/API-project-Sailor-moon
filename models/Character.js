import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CharacterSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  japaneseName: { type: String },
  englishName: { type: String },
  moon: { type: String },
  image: { type:  },
  
});

export default mongoose.model("characters", CharacterSchema);