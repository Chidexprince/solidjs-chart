import { createSignal, createEffect } from "solid-js";
import styles from './App.module.css';
import Charts from './components/Charts';


const [chartData, setChartData] = createSignal({});

createEffect(() => {
  const fetchData = async () => {
    const res = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2c36818bb5ca9e829313dd736fd15859")
    const data = await res.json();

    setChartData({
      series: [
        {
          name: 'Latitudes in London',
          data: data.map((d) => (d.lat))
        }
      ],
      xaxis: {
        categories: data.map((d) => (d.name))
      }
    });

  }

  fetchData()
});



function App() {

  return (
    <div class={styles.App}>
      <h2>Using ApexCharts.js to create charts in SolidJS</h2>
      <h3>Bar Chart</h3>
      <Charts />
    </div>
  );
}

export { chartData }

export default App;
