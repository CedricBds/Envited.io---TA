import illus from '../assets/img/event/eventImg.svg';
import './Create.css';

function CreatePage() {
  return (
    <main className="envitedCreate">

      <section className='createGrid'>
        <div className='createInformations'>
        <h1>Create an Event ✨</h1>

        <ol className='eventOptionsList'>
            <li>
            <button className='eventOptions optionItem'>

            <div className='iconBg'>
            <ion-icon name="calendar-outline"></ion-icon>
            </div>
                <div className='eventParams'>
                    <p className='eventParamLabel'>Event Date</p>
                    </div> 
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button> 
            </li>

            <li>


            <button className='eventOptions optionItem'>

            <div className='iconBg'>
            <ion-icon name="location-outline"></ion-icon>
                        </div>
                <div className='eventParams'>
                    <p className='eventParamLabel'>Address</p>
                     </div> 
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button> 
                    </li>       
                     </ol>

                     <button className='createButton'>Next 👉</button>
        </div>

        <img src={illus}  className="eventImage" alt="eventImage" />

      </section>


    </main>
  );
}

export default CreatePage;
