import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {
    const [title, setTitle] = useState('');
    const setTitleHandler = (e) => {
        setValueHandler(e, setTitle);
    }

    const [amount, setAmount] = useState('');
    const setAmountHandler = (e) => {
        setValueHandler(e, setAmount);
    }

    const [date, setDate] = useState('');
    const setDateHandler = (e) => {
        setValueHandler(e, setDate);
    }

    const setValueHandler = (event, cb) => {
        cb(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date)
        }
        setAmount('');
        setDate('');
        setTitle('');
        onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={setTitleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} min='0.01' step='0.01' onChange={setAmountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={date} min='2019-01-01' max='2022-12-31' onChange={setDateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
