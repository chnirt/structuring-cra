import Home from './components/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import About from './components/About'
import ChangePassword from './screens/User/ChangePassword'
import UpdateInformation from './screens/User/UpdateInformation'

// USER
import ScreenUser from './screens/User/Index'
import ScreenUserForm from './screens/User/Form'
import ScreenUserList from './screens/User/List'

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
    path: '/user',
    component: ScreenUser,
    routes: [
      {
        label: 'User List',
        path: '/user/list',
        component: ScreenUserList,
      },
      {
        label: 'Create User',
        path: '/user/create',
        component: ScreenUserForm,
      },
      {
        label: 'Create User',
        path: '/user/:id',
        component: ScreenUserForm,
      },
    ],
  },
  {
    label: 'Test',
    path: '/test',
    component: ScreenUserForm,
  },
]

export default routes
