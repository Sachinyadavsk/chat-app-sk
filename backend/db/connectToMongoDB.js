import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
	const mongoUri = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/chat-app';
	mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
