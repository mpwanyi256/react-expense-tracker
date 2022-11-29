import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => {
    const maximumExpenseAmount = Math.max(...dataPoints.map(dp => dp.value));

    return <div className='chart'>
        {dataPoints.map(dp => <ChartBar
            key={dp.label}
            value={dp.value}
            label={dp.label}
            max={maximumExpenseAmount} 
        />)}
    </div>
}

export default Chart;
