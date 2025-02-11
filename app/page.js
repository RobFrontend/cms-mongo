import Image from "next/image";
import Link from "next/link";
import { getCms } from "@/lib/mongo/cms";
export const revalidate = 15;
async function fetchCms() {
  const { cms } = await getCms();
  if (!cms) console.log("Failed to fetch CMS in HOME");
  return cms;
}

export default async function Home() {
  const cms = await fetchCms();
  const data = cms[0];

  if (!data)
    return (
      <section className="min-h-screen bg-slate-800 text-slate-100">
        <h1>Loading...</h1>
      </section>
    );
  return (
    <>
      <section className="min-h-screen  text-slate-100 grid content-center px-8 max-md:px2">
        <nav className="absolute top-4 right-4">
          <Link
            href="/cms"
            className="text-xl bg-slate-100 text-slate-800 px-4 py-2 hover:opacity-75 transition-all duration-300 max-xl:text-lg max-md:text-base"
          >
            Panel Edycji
          </Link>
        </nav>
        <div className="text-center">
          <h1 className="text-7xl uppercase max-xl:text-5xl max-md:text-3xl mb-3">
            {data.heroH1}
          </h1>
          <h2 className="text-6xl max-xl:text-3xl max-md:text-2xl">
            {data.heroH2}
          </h2>
          <div className="flex gap-8 justify-center text-2xl py-8 max-xl:text-lg max-[500px]:flex-col">
            <Link
              href={data.herobtn1url}
              className="px-6 py-4 border-slate-50 border-2 hover:opacity-75 transition-all duration-300"
            >
              {data.herobtn1}
            </Link>
            <Link
              href={data.herobtn2url}
              className="px-6 py-4 border-slate-50 border-2 bg-slate-50 text-slate-800 hover:opacity-75 transition-all duration-300"
            >
              {data.herobtn2}
            </Link>
          </div>
        </div>
        <Image
          src={`${data.herokv}`}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="herokv"
          className="-z-10"
        />
      </section>
      <section className="text-slate-800 px-8 max-md:px-2">
        <div className="max-w-[1200px] mx-auto my-0">
          <h2 className="text-2xl">{data.abouth2}</h2>
          <div className="flex gap-8 p-8 max-md:flex-col max-md:px-2">
            <Image
              src={data.aboutkv}
              width={300}
              height={1000}
              alt="aboutkv"
              className="h-fit max-md:self-center"
            />

            <div className="grid content-center">
              <p className="text-lg text-center max-xl:text-base">
                {data.aboutdesc}
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="pb-8 text-slate-800">
        <p className="text-center">
          &copy; {new Date().getFullYear()} {data.footer}
        </p>
      </footer>
    </>
  );
}
