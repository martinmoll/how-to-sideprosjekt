"use client"
import {ProjectList} from "./components/project-list";

export default function Home(){
  function SvenskVelkommen(){
    alert("Hur är läget")
  }
  return (
    <div>
    <main className="flex min-h-screen flex-col items-center h-full gap-10 p-24">
      <h1 className="text-3xl font-medium">
        Dette er min første nettside, vær tålmodig very pls!
      </h1>
      <button onClick={()=>SvenskVelkommen()}>
        Klikk meg for en varm svensk velkomst!
      </button>
      <p>
        Dette er meg, selveste Martin Møllenhus!
      </p>
      <p>De kaller meg IMØ's sorte får, hvorfor? Ikke spør meg!</p>
      <p>Jeg tar alle titler jeg kan få, det er åpenbart.</p>
      <ol>
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
