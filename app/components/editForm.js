"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function EditForm({
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
}) {
  const [newHeroH1, setnewHeroH1] = useState("");
  const [newHeroH2, setnewHeroH2] = useState("");
  const [newHeroBtn1, setnewHeroBtn1] = useState("");
  const [newHeroBtn1Url, setnewHeroBtn1Url] = useState("");
  const [newHeroBtn2, setnewHeroBtn2] = useState("");
  const [newHeroBtn2Url, setnewHeroBtn2Url] = useState("");
  const [newHeroKv, setnewHeroKv] = useState("");
  const [newAboutH2, setnewAboutH2] = useState("");
  const [newAboutDesc, setnewAboutDesc] = useState("");
  const [newAboutKv, setnewAboutKv] = useState("");
  const [newFooter, setnewFooter] = useState("");
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // const res = await fetch("https://test-cms-grabcode.vercel.app/api/cms", {
      const res = await fetch("api/cms", {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          heroH1: newHeroH1.trim() ? newHeroH1 : heroH1,
          heroH2: newHeroH2.trim() ? newHeroH2 : heroH2,
          herobtn1: newHeroBtn1.trim() ? newHeroBtn1 : herobtn1,
          herobtn1url: newHeroBtn1Url.trim() ? newHeroBtn1Url : herobtn1url,
          herobtn2: newHeroBtn2.trim() ? newHeroBtn2 : herobtn2,
          herobtn2url: newHeroBtn2Url.trim() ? newHeroBtn2Url : herobtn2url,
          herokv: newHeroKv.trim() ? newHeroKv : herokv,
          abouth2: newAboutH2.trim() ? newAboutH2 : abouth2,
          aboutdesc: newAboutDesc.trim() ? newAboutDesc : aboutdesc,
          aboutkv: newAboutKv.trim() ? newAboutKv : aboutkv,
          footer: newFooter.trim() ? newFooter : footer,
        }),
      });
      if (!res.ok) {
        throw new Error("Couldnt update CMS");
      }
      router.refresh();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form
      className="max-w-[90%] grid mx-auto gap-8 max-md:w-full max-md:text-sm"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4">
        <h2 className="text-2xl max-md:text-lg text-center mt-4">
          Sekcja 1 HERO
        </h2>
        <div className="grid gap-1 shadowbox">
          <label>Nagłówek 1</label>
          <textarea
            placeholder={heroH1}
            value={newHeroH1}
            onChange={(e) => setnewHeroH1(e.target.value)}
          ></textarea>
        </div>
        <div className="grid gap-1 shadowbox">
          <label>Nagłówek 2</label>
          <textarea
            placeholder={heroH2}
            value={newHeroH2}
            onChange={(e) => setnewHeroH2(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-4 shadowbox max-md:flex-col">
          <label>Tekst przycisku 1</label>
          <textarea
            placeholder={herobtn1}
            value={newHeroBtn1}
            onChange={(e) => setnewHeroBtn1(e.target.value)}
          ></textarea>

          <label>Link do przycisku 1</label>
          <textarea
            className="w-full"
            placeholder={herobtn1url}
            value={newHeroBtn1Url}
            onChange={(e) => setnewHeroBtn1Url(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-4 shadowbox max-md:flex-col">
          <label>Tekst przycisku 2</label>
          <textarea
            placeholder={herobtn2}
            value={newHeroBtn2}
            onChange={(e) => setnewHeroBtn2(e.target.value)}
          ></textarea>
          <label>Link do przycisku 2</label>
          <textarea
            className="w-full"
            placeholder={herobtn2url}
            value={newHeroBtn2Url}
            onChange={(e) => setnewHeroBtn2Url(e.target.value)}
          ></textarea>
        </div>
        <div className="grid gap-1 shadowbox">
          <label>Link obrazu tła</label>
          <textarea
            placeholder={herokv}
            value={newHeroKv}
            onChange={(e) => setnewHeroKv(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="grid gap-4 ">
        <h2 className="text-2xl max-md:text-lg text-center mt-8">Sekcja 2</h2>
        <div className="grid gap-1 shadowbox">
          <label>Tytuł sekcji 2</label>
          <textarea
            placeholder={abouth2}
            value={newAboutH2}
            onChange={(e) => setnewAboutH2(e.target.value)}
          ></textarea>
        </div>
        <div className="grid gap-1 shadowbox">
          <label>Tekst sekcji 2</label>
          <textarea
            className="min-h-[200px]"
            placeholder={aboutdesc}
            value={newAboutDesc}
            onChange={(e) => setnewAboutDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="grid gap-1 shadowbox">
          <label>Link obrazka sekcji 2</label>
          <textarea
            placeholder={aboutkv}
            value={newAboutKv}
            onChange={(e) => setnewAboutKv(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="grid gap-1">
        <h2 className="text-2xl max-md:text-lg text-center mt-8">Stopka</h2>
        <label>Tekst stopki</label>
        <textarea
          placeholder={footer}
          value={newFooter}
          onChange={(e) => setnewFooter(e.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-slate-900 text-xl text-slate-100 w-fit justify-self-center max-md:text-lg"
      >
        Save Changes
      </button>
    </form>
  );
}

export default EditForm;
