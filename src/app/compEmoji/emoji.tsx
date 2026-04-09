'use client'
import { useState } from "react";

export interface EmojiProps {
  totalPerguntas?: number;
  totalAcertos?: number;
  totalErros?: number;
}

export function Emoji({totalPerguntas, totalAcertos, totalErros}: EmojiProps) {
  if (totalAcertos === undefined || totalErros === undefined || totalPerguntas === undefined || totalAcertos + totalErros !== totalPerguntas) {
    return <>Quantidade de acertos e erros inválida</>;
  }

  const acertos = "😀".repeat(totalAcertos);
  const erros = "😭".repeat(totalErros);
  return <>{acertos + erros}</>;
}
