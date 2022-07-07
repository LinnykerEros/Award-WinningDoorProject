import Porta from "../../../components/Porta";
import criarPortas, { atualizarPortas } from "../../../functions/portas";
import { useEffect, useState } from "react";
import { useRouter } from "../../../../node_modules/next/router";
import Link from "../../../../node_modules/next/link";

import styles from "../../../styles/Jogo.module.css";
export default function Jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

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
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reinicinar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
