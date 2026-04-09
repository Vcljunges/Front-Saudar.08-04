'use client'
import { useState } from "react";

export default function Notas() {
  const [nota, setNota] = useState<number>();
  const resultado = () => {
    if (nota === undefined) return "";

    if (nota > 10 || nota < 0) {
      return "Nota inválida";
    } else if (nota >= 7) {
      return "Aprovado";
    } else if (nota >= 5) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-blue-900">
      <label>Digite a nota do aluno:</label>
      <input type="number" value={nota} onChange={(e) => setNota(Number(e.target.value))}/>
      <br/>
      <h1 className="text-5xl font-bold">Nota do aluno: {nota}</h1>
      <h1 className="text-5xl font-bold">Resultado: {resultado()}</h1>
    </div>
  );
}
