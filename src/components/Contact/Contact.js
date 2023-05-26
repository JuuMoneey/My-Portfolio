import './Contact.css'

export default function Contact(){
    return (
        <div className="page contact" id="contact">
            <h1>Contact Me</h1>
                    <div className='head'>
                        <p>Lets Get Connected!</p>
                        {/* some kind of logo */}
                    </div>
              <div className='contactPages'>
                        <ul className='list'>
                            <li className='list-item' target='_blank' href="https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing">Github</li>
                            <li className='list-item' target='_blank' href="https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing">LinkedIn</li>
                            <li className='list-item' target='_blank' href="https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing">SocialMedia?</li>
                        </ul>
              </div>
                    <div className='foot'>
                        <footer>Designed and Developed by Juliet Vorbe</footer>
                    </div>
        </div>
    );
}


{/* <a className="navBarLi resume" target='_blank' href="https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing">Resume</a> */}
