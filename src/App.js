import './App.css';

function App() {
  return (
    <div className="container">
      <div className="price-container">
        <div className="full-width-col"> 
          <h1>Join our community</h1>         
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code reviews. 
            Perfect for any developers who are serious about honing their skills.
          </p>
        </div>
        <div className="subs-col">
          <h2>Monthly Subscription</h2>  
          <h3>$29 <span>per month</span></h3> 
          <p>
            Full access for less than $1 a day 
          </p>   
          <button>Sign Up</button>              
        </div>  
        <div className="why-us-col">
          <h2>Why Us</h2> 
          <p>
            Tutorials by industry experts <br></br>
            Peer & expert code review <br></br>
            Coding exercises <br></br>
            Access to our GitHub repos <br></br>
            Community forum <br></br>
            Flashcard decks <br></br>
            New videos every week <br></br>
          </p>
        </div>    
      </div>
    </div>
  );
}

export default App;
