import { getCms } from "@/lib/mongo/cms";

export async function GET(req) {
  try {
    const { cms, error } = await getCms();
    if (error) throw new Error(error);

    return Response.json({ cms });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
