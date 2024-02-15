
import {model, models, Schema} from "mongoose";


const UserSchema = new Schema({
    name: {type: String},
    email: {type : String, required: true, unique: true},
    county: {type : String, required: true},
    password: {type : String}, 
}, {timestamps: true});
 export const User = models?.User || model('User', UserSchema);
 