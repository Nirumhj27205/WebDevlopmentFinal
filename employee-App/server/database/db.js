import mongoose from 'mongoose';

const dbConnection = async (username, password) => {

    const URL = `mongodb+srv://${username}:${password}@cluster0.lbcutdv.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully!!');
    }
    catch (error) {
        console.log('Error while connecting with database  ', error.message);
    }
}

export default dbConnection;