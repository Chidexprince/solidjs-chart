import { chartData } from '../App';
import { SolidApexCharts } from 'solid-apexcharts';


function Charts() {

  return (
    <SolidApexCharts width="800" type="bar" options={chartData()}  />
  );
}

export default Charts;