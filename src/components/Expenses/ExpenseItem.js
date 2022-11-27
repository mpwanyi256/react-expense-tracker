import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../Generics/Card'

const ExpenseItem = (props) => {
    const { title, amount, date } = props;
    const [expenseTitle, setTitle] = useState(title)

    const alertEvent = () => {
        setTitle((val) => {
            console.log('prev value', val)
            return 'Updated...'
        })
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
                <button onClick={alertEvent}>click</button>
            </div>
        </Card>
    )
}

export default ExpenseItem
