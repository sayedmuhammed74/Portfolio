import "./home.css"
import { BsMouse } from "react-icons/bs"
import Buttons from "./../button/button";
import { FaReact } from 'react-icons/fa'
function Home() {
    return (
        <div id="home" className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <FaReact className="img" />

            </div>
            <a href="#footer" className="scroll-down">
                <hr />
                <h5>Scroll Down</h5>
                <hr />
            </a>

            <h2 id="about">
                <span>About Me</span><br />
                <p>I'm a front end now but I keep learning to become a Full Stack Developer. I'm ready to learn</p>
            </h2>

            <Buttons />
        </div>
    );

}

// const toggle = document.querySelector(".main-img");

// toggle.addEventListener('click', () => {
//     toggle.classList.toggle("active")
// })

export default Home;