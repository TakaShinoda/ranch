import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Top } from './Top'
import { Search } from './Search'
// import { Detail } from './Detail'

export const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Top} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/detail" component={Detail} /> */}
      </Router>
    </>
  )
}
