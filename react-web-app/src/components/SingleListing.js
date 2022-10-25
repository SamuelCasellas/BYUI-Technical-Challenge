import React from 'react'
import '../styles.css'

const SingleListing = ({ labels, header=false }) => {
  
  let style, listingClassName
  if (header) {
    style = {'marginTop': '20px'}
    listingClassName = 'listing'
  } else {
    style = {}
    listingClassName = 'listing non-header'
  }

  return (
    <div className={listingClassName} style={style}>
      <span className='label'>{labels[0]}</span>
      <span className='label'>{labels[1]}</span>
      <span className='label'>{labels[2]}</span>
      <span className='label'>{labels[3]}</span>
    </div>
  )
}

export default SingleListing