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
			  <label for="businessName"></label>	
			  <input type="text" id="businessName" name="name" placeholder="Business Name" />
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
				  <span>Not a business: </span><a href="developerSignup.html">Developer Signup</a>
			  </div>
        <Intro />
      </section>
    </>
  );
}

function Intro() {
  return (
    <div class="intro">
			<span>Signup for Business</span>
		</div>
  );
}

export default App;
