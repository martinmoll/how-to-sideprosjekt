"use client"
import {ProjectList} from "./components/project-list";

export default function Home(){
  function SvenskVelkommen(){
    alert("Hur är läget")
  }
  return (
    <div style={{ backgroundColor: "#1a1a2e" }}>
    <main className="flex min-h-screen flex-col items-center h-full gap-10 p-24">
      <h1 className="text-3xl font-medium text-white">
        Dette er min første nettside, vær tålmodig very pls!
      </h1>
      <button onClick={()=>SvenskVelkommen()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Klikk meg for en varm svensk velkomst!
      </button>
      <p className="text-white">
        Dette er meg, selveste Martin Møllenhus!
      </p>
      <p className="text-white">De kaller meg IMØ's sorte får, hvorfor? Ikke spør meg!</p>
      <p className="text-white">Jeg tar alle titler jeg kan få, det er åpenbart.</p>
      <ol className="text-white">
        <p>Litt om meg:</p>
        <li>Mann</li>
        <li>203cm på en god dag</li>
        <li>Får pungslepp hvis det er +25 Celsius ute</li>
        <li>2 beer Andy</li>
      </ol>
      <ProjectList/>
    </main>
    </div>
  );
}
