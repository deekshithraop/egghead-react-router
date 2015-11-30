import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

const Product = (props) => {
  let { query } = props.location
  let colorStyle = {};
  if(query && query.color){
    colorStyle = {color: query.color}
  }

  return (
      <div style={colorStyle}>
        <h1>Product id: {props.params.id}</h1>
      </div>
    )
}

const Links = () => {
  return (
    <nav>
      <Link to="/product/widget-a">Widget A</Link>
      <Link to="/product/widget-a" query={{ color: 'red' }}>
        Widget A w/ color
      </Link>
      <Link to="/product/widget-b">
        Widget B
      </Link>
    </nav>
  )
}

const Container = (props) => <div><Links />{props.children}</div>

class App extends React.Component {
  render(){
  return (
    <Router>
    <Route path="/" component={Container}>
      <Route path="product/:id" component={Product} />
    </Route>
  </Router>
   )
  }
}

export default App
