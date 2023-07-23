import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.log("DB connection error", err);
      process.exit();
    });
  } catch (err) {
    console.log("something went wrong while connecting to DB");
    console.log(err);
  }
}
