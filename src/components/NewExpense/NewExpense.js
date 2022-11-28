import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {

    const addNewExpenseDataHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        onAddExpense(expense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={addNewExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
