'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [tempo, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const hora = new Date().getHours();
  const minuto = new Date().getMinutes();
  const horaFormatada = `${hora}:${minuto}`;

  const saudacao = () => {
    if (hora >= 5 && hora < 12) {
      return "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-blue-500">
      <h1 className="text-9xl font-bold">{horaFormatada}</h1>
      <h1 className="text-5xl font-bold">{saudacao()}</h1>
    </div>
  );
}
