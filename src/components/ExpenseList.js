import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const expense = [
    { id: 12312345, name: 'shopping', cost: 50 },
    { id: 12312345, name: 'Holiday', cost: 500 },
    { id: 12312345, name: 'Transportation', cost: 30 },
    { id: 12312345, name: 'fuel', cost: 54 },
    { id: 12312345, name: 'Child Care', cost: 20 },
  ]

  return (
    <ul>
      {expense.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  )
}

export default ExpenseList
