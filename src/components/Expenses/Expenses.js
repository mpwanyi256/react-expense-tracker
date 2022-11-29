import React from 'react'
import ExpensesList from './ExpensesList'
import Card from "../Generics/Card"
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = (props) => {
    const { expenses, onFilterByYear, selectedYear } = props;

    const onPickYearHandler = (yearPicked) => {
        onFilterByYear(yearPicked);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onYearChanged={onPickYearHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
