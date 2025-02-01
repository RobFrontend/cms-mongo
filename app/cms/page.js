import { getCms } from "@/lib/mongo/cms";
import Link from "next/link";
import EditForm from "../components/editForm";

async function fetchCms() {
  const { cms } = await getCms();
  if (!cms) console.log("Failed to fetch CMS in HOME");
  return cms;
}

async function Page() {
  const cms = await fetchCms();
  const data = cms[0];
  const {
    heroH1,
    heroH2,
    herobtn1,
    herobtn1url,
    herobtn2,
    herobtn2url,
    herokv,
    abouth2,
    aboutdesc,
    aboutkv,
    footer,
  } = data;
  if (!data)
    return (
      <section className="min-h-screen bg-slate-800 text-slate-100">
        <h1>Loading...</h1>
      </section>
    );
  return (
    <div className="bg-slate-400 min-h-screen p-8">
      <nav className="absolute top-4 right-4">
        <Link
          href="/"
          className="text-xl bg-slate-100 text-slate-800 px-4 py-2 hover:opacity-75 transition-all duration-300"
        >
          Powrót na stronę
        </Link>
      </nav>
      <EditForm
        heroH1={heroH1}
        heroH2={heroH2}
        herobtn1={herobtn1}
        herobtn1url={herobtn1url}
        herobtn2={herobtn2}
        herobtn2url={herobtn2url}
        herokv={herokv}
        abouth2={abouth2}
        aboutdesc={aboutdesc}
        aboutkv={aboutkv}
        footer={footer}
      />
    </div>
  );
}

export default Page;
