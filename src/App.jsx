import { createSignal, createEffect } from "solid-js";
import logo from './logo.svg';
import styles from './App.module.css';
import Example from './Example';



function App() {
  const [chart, setChart] = createSignal([]);

  createEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
      const data = await res.json()
      console.log(data, 'main');
      if(data) {
        setChart(data);
      }
    }
    fetchPrices()
  },[])
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      
      <Example chart={chart()} />
    </div>
  );
}

export default App;
