import React from 'react'
import routes from '../routes'
import MenuWithSubMenus from '../shared/MenuWithSubMunes'

const Header = () => {
  return (
    <ul>
      {routes.map((route, i) => (
        <MenuWithSubMenus key={i} {...route} />
      ))}
    </ul>
  )
}

export default Header
