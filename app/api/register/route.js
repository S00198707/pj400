import mongoose from "mongoose";
import bcrypt from "bcrypt";
import {User} from "../../models/User";

export async function POST(req) {
const body = await req.json();

mongoose.connect(process.env.MONGO_URL);
const pass = body.password;
if(!pass?.length || pass.length < 6 ){
    new Error('Password Must Be At Least 6 Characters')
}
const notHashedPassword = pass;
const salt = bcrypt.genSaltSync(10);
body.password = bcrypt.hashSync(notHashedPassword,salt);
const createdUser = await User.create(body);
    return Response.json(createdUser);
}
