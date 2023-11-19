import './contact.css'
import TwitterIcon from '../../assets/twitter.png' 
import InstagramIcon from '../../assets/instagram.png'


const Contact = () => {
  return (
    <div id = 'contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'></input>
            <input type='email' className='email' placeholder='Your Email'></input>
            <textarea className='msg' name = 'message' rows='5' placeholder='Your Message'></textarea>
            <button className='submitBtn' type='submit' value='send'>Submit</button>
            <div className='links'>
                <img src = {InstagramIcon} alt='instagram' className='link'/>
                <img src={TwitterIcon} alt='twitter' className='link'/>
            </div>
        </form>
    </div>
  )
}

export default Contact
