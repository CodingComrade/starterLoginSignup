import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('red');

  const handleDeveloperClick = () => {
    setBackgroundColor('red');
  };

  const handleBusinessClick = () => {
    setBackgroundColor('#134A8E');
  };

  return (
    <>
      <header>
        <span>Starter</span>
      </header>
      <div className="toggle">
        <span onClick={handleDeveloperClick} id="developer" style={{ backgroundColor: backgroundColor === 'red' ? 'lightblue' : 'white' }}>Developer</span>
        <span onClick={handleBusinessClick} id="business" style={{ backgroundColor: backgroundColor === '#134A8E' ? 'lightblue' : 'white' }}>Business</span>
      </div>
      <LoginForm backgroundColor={backgroundColor} />
    </>
  );
}

function LoginForm(props) {
  const { backgroundColor } = props;

  return (
    <section style={{backgroundColor}}>
      <div>
        <span className="login">Login to your account:</span>
        <SocialLogin />
      </div>
      <div>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder='Username' />
        <label htmlFor="password"></label>
        <input type="password" id="password" name="password" placeholder='Password'/>
        <br />
        <input type="checkbox" />
        <label htmlFor="keepMeLoggedIn">Keep me logged in</label>
        <button>Login</button>
        <SignupLink />
      </div>
    </section>
  );
}

function SocialLogin() {
  return (
    <div className="socialNetwork">
      <ul>
        <li>
          <a href="https://www.linkedin.com/checkpoint/lg/sign-in-another-account" aria-label="Link to LinkedIn sign in page">Sign in with LinkedIn</a>
        </li>
        <li>
          <a href="https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Sign in with Google</a>
        </li>
        <li>
          <a href="https://github.com/login" aria-label="link to github login page">Sign in with GitHub</a>
        </li>
      </ul>
    </div>
  );
}

function SignupLink() {
  return (
    <>
      <span>Not a member?</span> <a href="signup.html">Signup</a>
    </>
  );
}

export default App;
