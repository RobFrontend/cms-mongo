import { getCms } from "@/lib/mongo/cms";
import Link from "next/link";

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
      <form className="max-w-[90%] grid mx-auto gap-8">
        <div className="grid gap-4">
          <h2 className="text-2xl text-center mt-4">Sekcja 1 HERO</h2>
          <div className="grid gap-1 shadowbox">
            <label>Nagłówek 1</label>
            <textarea placeholder={heroH1}></textarea>
          </div>
          <div className="grid gap-1 shadowbox">
            <label>Nagłówek 2</label>
            <textarea placeholder={heroH2}></textarea>
          </div>
          <div className="flex gap-4 shadowbox ">
            <label>Tekst przycisku 1</label>
            <textarea placeholder={herobtn1}></textarea>

            <label>Link do przycisku 1</label>
            <textarea className="w-full" placeholder={herobtn1url}></textarea>
          </div>
          <div className="flex gap-4 shadowbox">
            <label>Tekst przycisku 2</label>
            <textarea placeholder={herobtn2}></textarea>
            <label>Link do przycisku 2</label>
            <textarea className="w-full" placeholder={herobtn2url}></textarea>
          </div>
          <div className="grid gap-1 shadowbox">
            <label>Link obrazu tła</label>
            <textarea placeholder={herokv}></textarea>
          </div>
        </div>
        <div className="grid gap-4 ">
          <h2 className="text-2xl text-center mt-8">Sekcja 2</h2>
          <div className="grid gap-1 shadowbox">
            <label>Tytuł sekcji 2</label>
            <textarea placeholder={abouth2}></textarea>
          </div>
          <div className="grid gap-1 shadowbox">
            <label>Tekst sekcji 2</label>
            <textarea
              className="min-h-[200px]"
              placeholder={aboutdesc}
            ></textarea>
          </div>
          <div className="grid gap-1 shadowbox">
            <label>Link obrazka sekcji 2</label>
            <textarea placeholder={aboutkv}></textarea>
          </div>
        </div>
        <div className="grid gap-1">
          <h2 className="text-2xl text-center mt-8">Stopka</h2>
          <label>Tekst stopki</label>
          <textarea placeholder={footer}></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-slate-900 text-xl text-slate-100 w-fit justify-self-center"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Page;
