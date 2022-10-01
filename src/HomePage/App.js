import envitedExample from '../assets/img/home/topImg.png';
import './HomePage.css';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="envitedMain">
        <img src={envitedExample}  className="envitedExampleLogo" alt="exempleLogo" />

      <div className='ctaBrand'>
        <h1>Imagine if <span className='gradiantText'>Snapchat</span> had events.</h1>
        <p>Easily host and share events with your friends across any social media.</p>
        <Link to="/create" className='createButton'>🎉 Create my event</Link>
      </div>
    </main>
  );
}

export default HomePage;
