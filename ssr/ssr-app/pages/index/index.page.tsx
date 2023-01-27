import React from 'react'
import { Counter } from './Counter'
import FancyComponent from 'my-component'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <FancyComponent></FancyComponent>
    </>
  )
}
