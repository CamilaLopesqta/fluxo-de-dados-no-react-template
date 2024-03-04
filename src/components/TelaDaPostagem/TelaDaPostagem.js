import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <Title>{props.titulo}</Title>
      <Image src={props.imagem} />
      <Description>{props.descricao}</Description>
      <p>{props.nomeAutor}</p>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
