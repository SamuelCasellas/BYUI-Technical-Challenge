import React from 'react'
import ReactDOM from 'react-dom/client'

import ProblemSection from './components/ProblemSection'

const backgroundColor = '#F5F6F7'

const App = () => {

  document.body.style.background = backgroundColor

  const problem1Text = '1. Clicking this button will return all the users from the server.'
  const problem1Labels = ['id', 'First Name', 'Last Name', 'Email']

  const problem2Text = '2. Clicking this button will return all the orders from the server.'
  const problem2Labels = ['Price', 'Product', 'Status', 'User id']

  const problem3Text = '3. Clicking this button will return ONLY the orders from Jane Doe.'
  const problem3Labels = problem2Labels

  // Retrieve Jane Doe's id, then use that as the filter for the order query.
  const janeDoeId = 4
  const problem3Filter = {"userId": janeDoeId}

  return (
    <>
      <ProblemSection 
        textDescription={problem1Text} 
        labels={problem1Labels}
        query='users'
      />
      <ProblemSection 
        textDescription={problem2Text} 
        labels={problem2Labels}
        query='orders'
      />
      <ProblemSection 
        textDescription={problem3Text} 
        labels={problem3Labels}
        query='orders'
        propertyToValueFilterObject={problem3Filter}
      />    
    </>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
