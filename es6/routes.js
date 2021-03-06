import React from 'react'
import App from './react_components/App'
import Home from './react_components/Home'
import Loader from './react_components/Loader'
import Result from './react_components/Result'
import TweetAnalyzer from './react_components/TweetAnalyzer'
import { Route, Router } from 'react-router'

let routes = (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="loading" component={Loader}/>
    <Route path="analyzing_tweet" component={TweetAnalyzer}/>
    <Route path="result" component={Result}/>
  </Route>
)

export default routes
