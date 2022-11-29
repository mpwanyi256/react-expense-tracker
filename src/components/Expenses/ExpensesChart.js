import Chart from '../Chart/Chart';

const ExpensesChart = ({expenses}) => {
    const cartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for(const expense of expenses) {
        const { date, amount } = expense;
        const expenseMonth = date.getMonth(); // Jan would be 0, Feb 1
        cartDataPoints[expenseMonth].value += amount;
    }

    return <Chart dataPoints={cartDataPoints} />
};

export default ExpensesChart;
