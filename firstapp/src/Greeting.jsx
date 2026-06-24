import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h3>Hello, {props.fn}!, your age is {props.age}.</h3>
      <h3>The favocolor is {props.favcolor}</h3>
    </div>
  )
}
