import Home from './components/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import About from './components/About'
import ChangePassword from './pages/User/ChangePassword'
import UpdateInformation from './pages/User/UpdateInformation'

// USER
import ScreenUser from './pages/User/Index'
import ScreenUserForm from './pages/User/Form'
import ScreenUserList from './pages/User/List'
import Notfound from './components/Notfound'

const routes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    label: 'Login',
    path: '/login',
    component: Login,
  },
  {
    label: 'Register',
    path: '/register',
    component: Register,
  },
  {
    label: 'About',
    path: '/about',
    component: About,
    routes: [
      {
        label: 'Change Password',
        path: '/about/changepassword',
        component: ChangePassword,
      },
      {
        label: 'Update Information',
        path: '/about/updateinformation',
        component: UpdateInformation,
      },
    ],
  },
  {
    label: 'User',
    path: '/users',
    component: ScreenUser,
    routes: [
      {
        label: 'User List',
        path: '/users/list',
        component: ScreenUserList,
      },
      {
        label: 'Create User',
        path: '/users/create',
        component: ScreenUserForm,
      },
      {
        label: 'Update User',
        path: '/users/:id',
        component: ScreenUserForm,
      },
    ],
  },
  {
    label: 'Test',
    path: '/test',
    component: ScreenUserForm,
  },
  {
    label: 'Not Found',
    path: '*',
    component: Notfound,
  },
]

export default routes
