import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nomeAutor, setNomeAutor] = useState("");

  return (
    <>
      <GlobalStyle />

      <Container>
        <FormularioPostagem
          titulo={titulo}
          imagem={imagem}
          descricao={descricao}
          nomeAuor={nomeAutor}
          setImagem={setImagem}
          setDescricao={setDescricao}
          setTitulo={setTitulo}
          setNomeAutor={setNomeAutor}
        />

        <TelaDaPostagem
          titulo={titulo}
          imagem={imagem}
          descricao={descricao}
          nomeAutor={nomeAutor}
        />
      </Container>
    </>
  );
}

export default App;
