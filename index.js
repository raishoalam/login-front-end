import React, {useState} from 'react'

import axios from 'axios'
import './index.css'

const LoginPage = () => {
  // Use useNavigate hook for navigation

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleLoginSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:8002/login',
        loginData,
      )
      const {success, message} = response.data

      if (success) {
        console.log('Login Successfully')
        alert('Login Successfully..')
        // Navigate to homepage or any other route on successful login
      } else {
        console.log(message)
        alert('Username or password is incorrect')
      }
    } catch (error) {
      console.error('Login error', error)
      alert('Error logging in. Please try again.')
    }

    setLoginData({
      username: '',
      password: '',
    })
  }

  const handleLoginChange = e => {
    const {name, value} = e.target
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div>
      <div className="wrapper-section">
        <div className="login-card-section">
          <img
            src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?"
            className="login-img"
            alt="LoginImg"
          />
        </div>

        <div className="login-card-section1">
          <h1 className="login-heading">
            Form <span className="login-heading-design">Login</span>
          </h1>
          <form onSubmit={handleLoginSubmit}>
            <div className="input-cont">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginChange}
                className="input-section"
                required
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="input-section"
                required
              />
              <br />
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>

            <p className="login-intro">
              Not registered yet?{' '}
              <a href="/registration" className="link">
                {' '}
                {/* Replace Link with a simple anchor tag */}
                Register Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
