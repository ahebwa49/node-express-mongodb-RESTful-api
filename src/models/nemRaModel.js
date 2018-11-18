  import mongoose from 'mongoose';

  const Schema = mongoose.Schema;

  export const ContactSchema = new Schema({
    firstName:{
      type: String,
      required: 'Enter your first name'
    },
    lastName:{
      type: String,
      required: 'Enter your first name'
    },
    email:{
      type: String
    },
    company:{
      type: String
    },
    number:{
      type: Number
    },
    date_created:{
      type: Date,
      default: Date.now
    }
  });
