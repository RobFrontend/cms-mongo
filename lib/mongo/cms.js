import clientPromise from "./mongodb";

let client;
let db;
let cms;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    cms = await db.collection("cms");
  } catch (err) {
    throw new Error("Failed to connect to database CMS");
  }
}

async () => {
  await init();
};

//// CMS /////

export async function getCms() {
  try {
    if (!cms) await init();
    const result = await cms
      .find({})
      .limit(99)
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();
    return { cms: result };
  } catch (err) {
    return { error: "Failed to fetch CMS" };
  }
}
