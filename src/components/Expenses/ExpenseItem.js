import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../Generics/Card'

const ExpenseItem = (props) => {
    const { title, amount, date } = props;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
