import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Tombol from "./components/Tombol";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/LandingPage.css";

function App() {
  return (
  	<>
	    <div className="bg-container">
	      <NavigationBar />
	 	  <Intro />
	      <Tombol />
	    </div>

	    <div className="trending">
	    	<Trending />
	    </div>

	     <div className="superhero">
	    	<Superhero />
	    </div>
    </>
  );
}

export default App;
