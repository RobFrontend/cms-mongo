import { MongoClient } from "mongodb";

const URL = process.env.NEXT_PUBLIC_MONGO_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
};

if (!URL) throw new Error("Add Mongo URL to env!");

let client = new MongoClient(URL, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPomise) {
    global._mongoClientPomise = client.connect();
  }
  clientPromise = global._mongoClientPomise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
