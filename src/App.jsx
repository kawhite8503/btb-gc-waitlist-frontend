import './App.css'

// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Services from './pages/Services/Services'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [services, setServices] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddService = newServiceData => {
    setServices([...services, newServiceData])
  }

  return (
    <>
      <div className='App'>
        <NavBar user={user} handleLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Landing user={user} />} />
            <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
            />
            <Route
              path="/profiles"
              element={
                <ProtectedRoute user={user}>
                  <Profiles />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute user={user}>
                  <Services handleAddService={handleAddService}/>
                </ProtectedRoute>
              }
              
            />
            <Route
              path="/change-password"
              element={
                <ProtectedRoute user={user}>
                  <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
