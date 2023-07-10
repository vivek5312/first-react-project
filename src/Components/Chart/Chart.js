import ChartBar from "./CharBar";

import "./Chart.css";

const Chart=(props)=>{
 const datapointsValue=props.datapoints.map(datapoints=>datapoints.value);
 const totalMaximum=Math.max(...datapointsValue)

    return (
        <div className="chart">
       { props.datapoints.map(datapoints=><ChartBar 
       key={datapoints.label}
       value={datapoints.value}
       maxValue={totalMaximum}
       label={datapoints.label}
       />
       )}
        </div>
    )
}
export default Chart;