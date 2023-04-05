import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
			  <span>Starter</span>
		  </header>
      <section>
        <div class="signup">
			  <label for="name"></label>	
			  <input type="text" id="name" name="name" placeholder="Username" />
			  <br />
			  <label for="email"></label>	
			  <input type="email" id="email" placeholder="email address" />
			  <br />
			  <label for="password"></label>	
			  <input type="password" id="password" name="password" placeholder="password" />
			  <br />
			  <button>Sign Up</button>
			  </div>
        <div class="changeSignUp">
				  <span>Not a Developer: </span><a href="businessSignup.html">Business Signup</a>
			  </div>
        <Intro />
      </section>
    </>
  );
}

function Intro() {
  return (
    <div class="intro">
			<span>Signup for Developer</span>
		</div>
  );
}

export default App;
