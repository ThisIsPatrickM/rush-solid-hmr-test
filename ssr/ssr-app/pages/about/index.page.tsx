import React from 'react'
import './code.css'
import FancyComponent from 'my-component'

export { Page }

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        <FancyComponent></FancyComponent>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
