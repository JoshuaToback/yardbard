import mongoose, { Schema, model, models } from "mongoose";

const SaleSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  sale: {
    type: String,
    required: [true, "Yard Sale is required,"],
  },

  image: {
    type: String, 
    required: [true, "Image is required."],
  }
});

const Sale = models.Prompt || model('Prompt', SaleSchema);

export default Sale;
