import React, { lazy, Suspense } from 'react';
import styles from '@/styles/Home.module.css';

// Carrega os micro front-ends apenas no navegador para evitar problemas de SSR.
const Cardapio = typeof window !== 'undefined' 
  ? lazy(() => import('cardapio/Cardapio')) 
  : () => null;

const Pedido = typeof window !== 'undefined' 
  ? lazy(() => import('pedido/Pedidos')) 
  : () => null;

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Controla a abertura do painel de pedidos em telas pequenas. */}
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />

      <h1 className={styles.titulo}>Micro Front-Ends</h1>

      <div className={styles.row}>
        <div className={styles.colunaCardapio}>
          <Suspense fallback={<div className={styles.loading}>Carregando cardápio...</div>}>
            <Cardapio />
          </Suspense>
        </div>
        {/* Fundo que fecha o painel ao ser acionado. */}
        <label htmlFor="menu-toggle" className={styles.backdrop} />

        {/* Painel lateral de pedidos. */}
        <div className={styles.pedidoContainer}>
          <label htmlFor="menu-toggle" className={styles.closeButton}>
            ✕ Fechar
          </label>

          <Suspense fallback={<div className={styles.loading}>Carregando pedidos...</div>}>
            <Pedido />
          </Suspense>
        </div>
      </div>

      {/* Atalho para abrir o painel em telas pequenas. */}
      <label htmlFor="menu-toggle" className={styles.hamburgerButton}>
        🛒 Ver Pedidos
      </label>
    </main>
  );
}
