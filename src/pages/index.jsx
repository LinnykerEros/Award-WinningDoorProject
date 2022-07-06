import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import criarPortas, { atualizarPortas } from "../functions/portas";
export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div style={{ display: "flex" }}>
      {/* onChange, chama uma nova porta, que me da a liberdade de alternar os estados */}
      {renderizarPortas()}
    </div>
  );
}
