import React, { useState } from 'react'
import AddForm from './AddForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {

    const [showForm, setShowForm] = useState(false);

    const addNewExpenseDataHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        onAddExpense(expense);
    }

    const toggleShowFormHandler = state => {
        setShowForm(state)
    }

    return (
        <div className='new-expense'>
            <AddForm
                onToggleShowForm={toggleShowFormHandler}
                showForm={showForm}
                onSaveExpenseData={addNewExpenseDataHandler}
            />
        </div>
    )
}

export default NewExpense
