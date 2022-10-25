import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.css'

import SingleListing from './SingleListing'

import retrieveDataSet from '../api/retrieveDataSet'

const ProblemSection = ({textDescription, labels, 
                        query, propertyToValueFilterObject=null}) => {  
                             
  const [results, setResults] = React.useState([])

  const renderResults = (data) => data.map((item) => {
    let orderedLabels
    switch(query) {
      case 'users':
        orderedLabels = [item.id, item.firstName, item.lastName, item.email]
        break
      case 'orders':
        orderedLabels = [item.price, item.product, item.status, item.userId]
        break
      default:
        console.error(`Unknown case: ${query}`)
    }
    return <SingleListing labels={orderedLabels} />
  })

  const onClick = async() => {
    let data = await retrieveDataSet(query)
    if (propertyToValueFilterObject) {
      for (let prop in propertyToValueFilterObject) {
        data = data.filter((item) => item[prop] == propertyToValueFilterObject[prop])
      }
    }
    setResults(renderResults(data))
  }

  return (
    <main style={{margin: '50px 0 50px 0'}}>
      <span className='text-description'>{textDescription}</span>
      <Card className='card'>
        <div className='button-container'>
          <Button className='button' onClick={onClick}>Click</Button>
        </div>
        <div className='listing-container'>
          <SingleListing labels={labels} header={true} />
          {results}
        </div>
      </Card>
    </main>
  )
}

export default ProblemSection