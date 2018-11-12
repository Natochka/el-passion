import React from 'react'
import response from '../response.json'
import IssueGroup from './IssueGroup'

function Content() {
  return (
    <div className="content-wrapper">
      {response.data.map(item => (
        <div key={item.published} className="content-block">
          <div className="content-date">{item.published}</div>
          <IssueGroup data={item.data} />
        </div>
      ))}
    </div>
  )
}

export default Content
