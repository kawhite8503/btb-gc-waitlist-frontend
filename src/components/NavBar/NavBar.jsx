import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className='App-header'>
        Bless These Brows Assistant
          {user ?
            <nav>
              <Link to="/">Home</Link>
              <Link to="/waitlist">Waitlist</Link>
              <Link to="/giftcards">Giftcards</Link>
              <Link to="/services">Services</Link>
              <Link to="" onClick={handleLogout}>Log Out</Link>
              <Link to="/changePassword">Change Password</Link>
            </nav>
          :
            <nav>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
          }
      </header>
    </>
  )
}

export default NavBar
