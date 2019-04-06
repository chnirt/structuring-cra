import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MenuWithSubMenus from '../shared/MenuWithSubMunes'

const About = ({ routes }) => {
  return (
    <div>
      About Page
      <br />
      {/* Header */}
      <ol>
        {routes.map((route, i) => (
          <MenuWithSubMenus key={i} {...route} />
        ))}
      </ol>
      {/* Content */}
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} component={route.component} />
        ))}
      </Switch>
    </div>
  )
}

export default About
