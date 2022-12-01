import mongoose from "mongoose";

type car ={
    manfacturer: string
    model:number,
    color: string,
    chasisNo:number,
    selfDriving:boolean,
    transmission:boolean
}

interface icar extends car, mongoose.Document {}

const carSchema = new mongoose.Schema({
  manfacturer: String,
  model: Number,
  color: String,
  chasisNo: Number,
  selfDriving: Boolean,
  transmission: Boolean,
},
{timestamps:true}
);

export default mongoose.model<icar>("usercars", carSchema)