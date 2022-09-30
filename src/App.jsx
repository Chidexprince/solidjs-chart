import { createSignal, createEffect } from "solid-js";
import styles from './App.module.css';
import Charts from './components/Charts';

const [chartData, setChartData] = createSignal({});

createEffect(() => {
  const fetchData = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
    const json = await res.json();
    const data = json.data;

    setChartData({
      type: "bar",
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: "Crypto Price in USD",
            backgroundColor: [
              "#0d6efd",
              "#28a745",
              "#dc3545",
              "#ffc107",
              "#17a2b8",

            ],
            data: data.map((d) => (d.priceUsd))
          }
        ]
      }
    })

  }
  fetchData()
});


function App() {

  return (
    <div class={styles.App}>
      <h2>Using ChartJS to create charts in SolidJS</h2>
      <h3>Bar Chart</h3>
      <Charts />
    </div>
  );
}

export { chartData }

export default App;
