import './contact.css'

import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
export default function Contact() {
    return (
        <div id='contact' className="container contact-container">
            <h1>Contact Me</h1>
            <div className='contact-links'>

                <a href="" className='contact youtube'>
                    <AiOutlineYoutube className='icon' />
                    <h2>YouTube <span>Creative Ambition</span></h2>
                </a>

                <a href="" className='contact whatsapp'>
                    <AiOutlineWhatsApp className='icon' />
                    <h2>WhatsApp <span>+20-0110-212-8186</span></h2>
                </a>
                <a href="" className='contact instagram'>
                    <AiOutlineInstagram className='icon' />
                    <h2>Instagram <span>_sayedmuhammed</span></h2>
                </a>

            </div>
        </div>
    )
}