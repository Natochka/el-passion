import React from 'react'
import { string } from 'prop-types'
import StarIcon from './StarIcon'

function Issue({ issue }) {
  return (
    <div className="issue">
      <div className="issue__text">{issue}</div>
      <StarIcon className="icon-star" />
    </div>
  )
}

Issue.propTypes = {
  issue: string
}

export default Issue
