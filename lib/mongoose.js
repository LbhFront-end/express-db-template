import mongoose from "mongoose";

mongoose.connect('mongodb://root:123456@localhost:27017/?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if (error) {
        console.log('mongo database connect failed', error)
    } else {
        console.log('mongo database connect succeed')
    }
})

export default mongoose;