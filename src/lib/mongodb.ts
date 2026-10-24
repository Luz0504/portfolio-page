import { MongoClient } from "mongodb";

const uri = import.meta.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI in .env");
}

const client = new MongoClient(uri);

const clientPromise = client.connect();

export default clientPromise;