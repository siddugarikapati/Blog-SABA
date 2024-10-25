import mongoose from 'mongoose';

const Connection = async (username, password, databaseName) => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.8wkjq.mongodb.net:27017,cluster0-shard-00-01.8wkjq.mongodb.net:27017,cluster0-shard-00-02.8wkjq.mongodb.net:27017/${databaseName}?ssl=true&replicaSet=atlas-dxygyz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
};

export default Connection;
