import SolidChart from "solid-chart.js";
import { chartData } from '../App';


function Charts() {

  return (
    <>

      {chartData() &&
        <SolidChart

          {...chartData()}

          canvasOptions={{
            width: 200,
            height: 150
          }}
        />


      }

    </>
  );
}

export default Charts;