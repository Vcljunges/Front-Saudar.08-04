'use client'
import { useState } from "react";

export interface NotaPEmojiProps {
  totalPerguntas?: number;
  totalAcertos?: number;
}

export function NotaPEmoji({totalPerguntas, totalAcertos}: NotaPEmojiProps) {
    const notas = ["😭", "😟", "😐", "🙂", "😁", "😶"]
  if (totalAcertos === undefined || totalPerguntas === undefined || totalPerguntas === 0) {
    return <>Quantidade de acertos e erros inválida</>;
  }

  const resultado = () => {
    const porcentagem = (totalAcertos / totalPerguntas) * 100;
    
    const acertosInt = Math.max(0, Math.round(totalAcertos));
    const perguntasInt = Math.max(0, Math.round(totalPerguntas));
    const totalErros = Math.max(0, perguntasInt - acertosInt);
    
    if (porcentagem >= 0 && porcentagem <= 20) {
        return <>{notas[0].repeat(acertosInt)+notas[5].repeat(totalErros)}</>;
    } else if (porcentagem > 20 && porcentagem <= 40) {
        return <>{notas[1].repeat(acertosInt)+notas[5].repeat(totalErros)}</>;
    } else if (porcentagem > 40 && porcentagem <= 60) {
        return <>{notas[2].repeat(acertosInt)+notas[5].repeat(totalErros)}</>;
    } else if (porcentagem > 60 && porcentagem <= 80) {
        return <>{notas[3].repeat(acertosInt)+notas[5].repeat(totalErros)}</>;
    } else if (porcentagem > 80 && porcentagem <= 100) {
        return <>{notas[4].repeat(acertosInt)+notas[5].repeat(totalErros)}</>;
    }
    return <></>;
  };

  return resultado();
}
