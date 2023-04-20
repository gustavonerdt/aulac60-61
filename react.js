import React, { useState } from "react";

const Categorias = [
  "Blueprint",
  "Quickspin",
  "RTG SLOTS",
  "Ytggdrasil",
  "Spearhead Studios",
  "NetEnt",
  "Thunderkick"
];

const Filtros = ["Slots", "Ao Vivo", "Cassino"];

const App = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const [filtroSelecionado, setFiltroSelecionado] = useState("Todas");
  const [showTexto, setShowTexto] = useState(false); // Estado para controlar a exibição do texto

  const filtrarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const filtrarTipo = (filtro) => {
    setFiltroSelecionado(filtro);
    // Verificar se a opção selecionada é "Quickspin" e "Ao Vivo"
    if (categoriaSelecionada === "Quickspin" && filtro === "Ao Vivo") {
      setShowTexto(true);
    } else {
      setShowTexto(false);
    }
  };

  const resultadosFiltrados = () => {
    // Lógica de filtragem dos resultados com base na categoria e no filtro selecionado
    // ...
    // Retorne os resultados filtrados como array
    return [];
  };

  return (
    <div>
      <h1>Filtragem de Categorias</h1>
      <label htmlFor="categoria">Selecione uma categoria:</label>
      <select
        id="categoria"
        value={categoriaSelecionada}
        onChange={(e) => filtrarCategoria(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {Categorias.map((categoria, index) => (
          <option key={index} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <label htmlFor="filtro">Selecione um tipo de filtro:</label>
      <select
        id="filtro"
        value={filtroSelecionado}
        onChange={(e) => filtrarTipo(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {Filtros.map((filtro, index) => (
          <option key={index} value={filtro}>
            {filtro}
          </option>
        ))}
      </select>
      {/* Renderize aqui os resultados filtrados */}
      {resultadosFiltrados().map((resultado, index) => (
        <div key={index}>{/* Renderize cada resultado filtrado aqui */}</div>
      ))}
      {showTexto && (
        <p>
          Texto que aparece quando a categoria "Quickspin" e o filtro "Ao Vivo" são selecionados.
        </p>
      )}
    </div>
  );
};

export default App;
