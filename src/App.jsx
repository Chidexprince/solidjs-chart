import { createSignal, createEffect } from "solid-js";
import styles from './App.module.css';
import Charts from './components/Charts';

const [chartData, setChartData] = createSignal({});

createEffect(() => {
  const fetchData = async () => {
    const res = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2c36818bb5ca9e829313dd736fd15859")
    const data = await res.json();

    setChartData({
      type: "bar",
      data: {
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: "Latitudes in London",
            backgroundColor: [
              "#0d6efd",
              "#28a745",
              "#dc3545",
              "#ffc107",
              "#17a2b8",

            ],
            data: data.map((d) => (d.lat))
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
