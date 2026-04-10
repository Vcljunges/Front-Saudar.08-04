'use client'
import { NotaPEmoji } from "../compEmoji/notaPEmoji";
import { useState } from "react";

export default function PEmoji() {
    const [nota, setNota] = useState<number>();
    const [totalPerguntas, setPergunta] = useState<number>();
    const [totalAcertos, setAcertos] = useState<number>();
    const [totalErros, setErros] = useState<number>();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-blue-900">
        <h1>Digite a quantidade de perguntas:</h1>
        <input type="number" value={totalPerguntas ?? ""} onChange={(e) => setPergunta(e.target.value === "" ? undefined : Number(e.target.value))} className="border rounded p-1 text-black" />
        <br/>
        <h1>Digite a quantidade de acertos:</h1>
        <input type="number" value={totalAcertos ?? ""} onChange={(e) => setAcertos(e.target.value === "" ? undefined : Number(e.target.value))} className="border rounded p-1 text-black" />
        <br/>
        <h1>Digite a quantidade de erros:</h1>
        <input type="number" value={totalErros ?? ""} onChange={(e) => setErros(e.target.value === "" ? undefined : Number(e.target.value))} className="border rounded p-1 text-black" />
        <br/>
        <h1 className="text-5xl font-bold">Resultado: <NotaPEmoji totalPerguntas={totalPerguntas} totalAcertos={totalAcertos} totalErros={totalErros}/></h1>
    </div>
  );
}
