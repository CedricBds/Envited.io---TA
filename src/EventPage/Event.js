import illus from '../assets/img/event/eventImg.svg';
import './Event.css';

function EventPage() {
  return (
    <main className="envitedCreate">

      <section className='createGrid'>
        <div className='createInformations'>
        <h1>Birthday Bash</h1>
        <p>Hosted by <span className='boldText'>Elysia</span></p>

        <ol className='eventOptionsList'>
            <li>
            <button className='eventOptions optionItem'>

            <div className='iconBg'>
            <ion-icon name="calendar-outline"></ion-icon>
            </div>
                <div className='eventParams'>
                    <p className='eventParamLabel'>18 August <time>6:00</time>PM</p>
                    <p>to <span className='boldText'>19 August 1:00PM</span> UTC +10</p> </div> 
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button> 
            </li>

            <li>


            <button className='eventOptions optionItem'>

            <div className='iconBg'>
            <ion-icon name="location-outline"></ion-icon>
                        </div>
                <div className='eventParams'>
                    <p className='eventParamLabel'>Street name</p>
                    <p>Suburb, State, Postcode</p> </div> 
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button> 
                    </li>       
                     </ol>
        </div>

        <img src={illus}  className="eventImage" alt="eventImage" />

      </section>


    </main>
  );
}

export default EventPage;
