import profilePicture from '../Assets/react-1-logo-png-transparent.png'
import './Home-Landing.css';

export default function HomeLanding(){
    return (
        <div className="page intro" id="home">
            <div className='introduction'>
                <div>
                    <h1>Juliet Vorbe</h1>
                </div>

                <div>
                    <h2>Front End Developer</h2>
                </div>

                <div>
                    <div>'Inspirational Quote'</div>
                </div>
            </div>
                <img src={profilePicture} width='350' height='350'/>       
        </div>
    );
}
