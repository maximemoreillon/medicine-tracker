import {Schema, model} from 'mongoose'


const intakeItemSchema = new Schema({
    date: Date,
})

const medicineSchema = new Schema({

    name: String,
    description: String, // might not be used
    user_id: String,
    frequency: Number,


    intake: [intakeItemSchema],
    // OR
    last_intake: Date,
})

const Medicine = model('Medicine', medicineSchema)

export default Medicine