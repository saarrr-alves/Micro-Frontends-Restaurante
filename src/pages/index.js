import React, { lazy, Suspense } from 'react';
import styles from '@/styles/Home.module.css';

const Cardapio = typeof window !== 'undefined'
  ? lazy(() => import('cardapio/Cardapio'))
  : () => null;

const Pedido = typeof window !== 'undefined'
  ? lazy(() => import('pedido/Pedidos'))
  : () => null;

export default class Home extends React.Component {
  state = {
    mounted: false,
  };

  componentDidMount() {
    // 1. Garante que servidor e cliente renderizem o mesmo HTML inicial antes de montar os micros
    this.setState({ mounted: true });

    // 2. Configura a fila de segurança para evitar perda do primeiro prato
    window.__pedidoPronto = false;
    window.__filaPedidos = [];

    this.bufferEvento = (event) => {
      if (!window.__pedidoPronto) {
        window.__filaPedidos.push(event.detail);
      }
    };

    window.addEventListener('adicionarAoPedido', this.bufferEvento);
  }

  componentWillUnmount() {
    if (this.bufferEvento) {
      window.removeEventListener('adicionarAoPedido', this.bufferEvento);
    }
  }

  render() {
    const { mounted } = this.state;

    return (
      <main className={styles.container}>
        {/* Controla a abertura do painel de pedidos em telas pequenas. */}
        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />

        <h1 className={styles.titulo}>Micro Front-Ends</h1>

        <div className={styles.row}>
          <div className={styles.colunaCardapio}>
            {mounted ? (
              <Suspense fallback={<div className={styles.loading}>Carregando cardápio...</div>}>
                <Cardapio />
              </Suspense>
            ) : (
              <div className={styles.loading}>Carregando cardápio...</div>
            )}
          </div>

          {/* Fundo que fecha o painel ao ser acionado. */}
          <label htmlFor="menu-toggle" className={styles.backdrop} />

          {/* Painel lateral de pedidos. */}
          <div className={styles.pedidoContainer}>
            <label htmlFor="menu-toggle" className={styles.closeButton}>
              ✕ Fechar
            </label>

            {mounted ? (
              <Suspense fallback={<div className={styles.loading}>Carregando pedidos...</div>}>
                <Pedido />
              </Suspense>
            ) : (
              <div className={styles.loading}>Carregando pedidos...</div>
            )}
          </div>
        </div>

        {/* Atalho para abrir o painel em telas pequenas. */}
        <label htmlFor="menu-toggle" className={styles.hamburgerButton}>
          🛒 Ver Pedidos
        </label>
      </main>
    );
  }
}