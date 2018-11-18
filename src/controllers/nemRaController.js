import mongoose from 'mongoose';
import {ContactSchema} from '../models/nemRaModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
  
}
