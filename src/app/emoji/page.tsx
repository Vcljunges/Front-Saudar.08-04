'use client'
import { useState } from "react";
import { Emoji } from "../compEmoji/emoji";

export default function HomeEmoji() {
  const [totalPerguntas, setPergunta] = useState<number>();
  const [totalAcertos, setAcertos] = useState<number>();
  const [totalErros, setErros] = useState<number>();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black-900 font-sans dark:bg-black-900">
      <label className="text-5xl font-bold">Digite a quantidade de perguntas: </label>
      <input type="number" value={totalPerguntas} onChange={(e) => setPergunta(Number(e.target.value))}/>
      <label className="text-5xl font-bold">Digite a quantidade de acertos: </label>
      <input type="number" value={totalAcertos} onChange={(e) => setAcertos(Number(e.target.value))}/>
      <label className="text-5xl font-bold">Digite a quantidade de erros: </label>
      <input type="number" value={totalErros} onChange={(e) => setErros(Number(e.target.value))}/>
      <br/>
      <h1 className="text-5xl font-bold">Resultado: <Emoji totalPerguntas={totalPerguntas} totalAcertos={totalAcertos} totalErros={totalErros} /></h1>
    </div>
  );
}
