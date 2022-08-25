import mongoose from 'mongoose';
const {Schema} = mongoose;


const customers = new Schema({
    name: String,
    surname: String,
    location: {
        lat: Number,
        long: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    IsDeactive: Boolean
});
const customer = mongoose.model('customer', customers);
export default customer;
