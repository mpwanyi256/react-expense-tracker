import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem"
import Card from "../Generics/Card"
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
    const { items } = props;

    const [yearSelected, setYearSelected] = useState('2022');

    const onPickYearHandler = (yearPicked) => {
        setYearSelected(yearPicked);
        console.log('Picked year', yearPicked)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={yearSelected} onYearChanged={onPickYearHandler} />
            {
                items.map(item => {
                    const { id, title, amount, date } = item
                    return <ExpenseItem
                        key={id}
                        title={title}
                        amount={amount}
                        date={date}
                    />
                })
            }
        </Card>
    )
}

export default Expenses
