import React from 'react'

function Title(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: 'orange', borderBottom: '5px solid red' }}>
        {props.mainTitle}<br />
        {props.subTitle}
        </h1>
    </div>
  )
}

export default Title
