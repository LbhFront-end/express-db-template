import mongoose from "../../lib/mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    biography: { type: String, require: false },
    picture: { type: String, require: false },
})

const userModel = mongoose.model('user', userSchema);

export default userModel;