import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Main from '../include/Main'
import routes from '../routes'
import RouteWithSubRoutes from '../shared/RouteWithSubRoutes'

const ScreensRoot = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Redirect to="/login" />
      </Switch>
    </Main>
  </BrowserRouter>
)

export default ScreensRoot
