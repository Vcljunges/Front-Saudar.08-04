'use client'
import { useState } from "react";

export interface NotaPEmojiProps {
  totalPerguntas?: number;
  totalAcertos?: number;
  totalErros?: number;
}

export function NotaPEmoji({totalPerguntas, totalAcertos, totalErros}: NotaPEmojiProps) {
    const notas = ["😭", "😟", "😐", "🙂", "😁"]
  if (totalAcertos === undefined || totalErros === undefined || totalPerguntas === undefined || totalPerguntas === 0 || totalAcertos + totalErros !== totalPerguntas) {
    return <>Quantidade de acertos e erros inválida</>;
  }

  const resultado = () => {
    const porcentagem = (totalAcertos / totalPerguntas) * 100;
    
    if (porcentagem >= 0 && porcentagem <= 20) {
        return <>{notas[2].repeat(totalAcertos)+notas[1].repeat(totalErros)}</>;
    } else if (porcentagem > 20 && porcentagem <= 40) {
        return <>{notas[2].repeat(totalAcertos)+notas[2].repeat(totalErros)}</>;
    } else if (porcentagem > 40 && porcentagem <= 60) {
        return <>{notas[2].repeat(totalAcertos)+notas[2].repeat(totalErros)}</>;
    } else if (porcentagem > 60 && porcentagem <= 80) {
        return <>{notas[3].repeat(totalAcertos)+notas[2].repeat(totalErros)}</>;
    } else if (porcentagem > 80 && porcentagem <= 100) {
        return <>{notas[4].repeat(totalAcertos)+notas[2].repeat(totalErros)}</>;
    }
    return <></>;
  };

  return resultado();
}
