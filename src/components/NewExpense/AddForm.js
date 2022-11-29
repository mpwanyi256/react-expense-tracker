import React from 'react'
import ExpenseForm from './ExpenseForm'
import './AddForm.css'

const AddForm = ({onSaveExpenseData, onToggleShowForm, showForm}) => {

    const buttonClickHandler = () => {
        onToggleShowForm(!showForm)
    }

    const onSaveExpenseHandler = (expense) => {
        onSaveExpenseData(expense);
        onToggleShowForm(!showForm);
    }

    if (!showForm) { 
        return (
        <div className='add-expense'>
            <button type='submit' onClick={buttonClickHandler}>Add Expense</button>
        </div>
        )
    }

    return (<ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />)
}

export default AddForm;
