import { createEffect, createSignal } from "solid-js";

import SolidChart from "solid-chart.js";

const edges = 6;
const labels = ["Solid", "Is", "Most", "Performant", "JavaScript", "Framework"];
const datasets = new Array(edges).fill([]).map((_, i) => {
  const arr = [0, 0, 0, 0, 0, 0];
  if (i === edges - 1) {
    arr[i] = 60;
    arr[0] = 60;
  } else {
    arr[i] = 60;
    arr[i + 1] = 60;
  }
  return {
    backgroundColor: i % 2 === 0 ? "#3164A3" : "white",
    data: arr,
    label: labels[i]
  };
});

function Example(props) {
  if (props && props.chart) {
    // const data = props.chart.data.map((i) => i.priceUsd);
  }  
  console.log(props.chart.data, 'charts');
  
  // console.log(data, 'data');
 
    const settings = {
      type: "radar",
      data: {
        labels,
        datasets
      },
      options: {
        title: {
          display: true,
          text: "SOLID CHART"
        },
        scale: {
          ticks: {
            maxTicksLimit: edges
          }
        }
      }
    };
    const barChart = {
        type: "bar",
        data: { 
            labels: ['January', 'February', 'March',
            'April', 'May'],
            datasets: [
                {
                    label: "Rainfall",
                    backgroundColor: "#3164A3",
                    data: [23, 45, 55, 66, 89]
                }
            ]
        }

    }
    const [chart, setChart] = createSignal(settings);
    const [barChartData, setBarChartData] = createSignal(barChart);
    createEffect(() => {
      setInterval(() => {
        labels.push(labels.shift());
        setChart("data", "labels", [...labels]);
        datasets.push(datasets.shift());
        setChart("data", "datasets", [...datasets]);
        setBarChartData("datasets", "data", [...datasets]);
      }, 1400);
    });
    return (
        <>
      {/* <SolidChart
        {...chart}
        canvasOptions={{
          width: 1000,
          height: 950
        }}
      /> */}

      <SolidChart 
        {...barChartData}
       canvasOptions={{
        width: 1000,
        height: 950
      }}
      />
      </>
    );
}

export default Example;