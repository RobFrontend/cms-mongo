import { getCms, updateCms } from "@/lib/mongo/cms";
import { revalidatePath } from "next/cache";

export async function GET(req) {
  try {
    const { cms, error } = await getCms();
    if (error) throw new Error(error);

    return Response.json({ cms });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const updatedData = await req.json();

    if (!updatedData) {
      return Response.json({ error: "No data to Update" }, { status: 400 });
    }
    revalidatePath("/", "/cms");
    const succes = await updateCms(updatedData);

    if (!succes) {
      return Response.json({ error: "Couldnt update CMS" }, { status: 500 });
    }
    return Response.json({ message: "CMS updated successfuly" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
