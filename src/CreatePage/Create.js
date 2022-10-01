import logo from '../assets/img/home/topImg.png';
import './HomePage.css';

function createPage() {
  return (
    <main className="envitedMain">
        <img src={logo}  className="envitedExampleLogo" alt="exempleLogo" />

      <div className='ctaBrand'>
        <h1>Imagine if <span className='gradiantText'>Snapchat</span> had events.</h1>
        <p>Easily host and share events with your friends across any social media.</p>
        <button className='createButton'>🎉 Create my event</button>
      </div>
    </main>
  );
}

export default createPage;
