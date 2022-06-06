import './members.css'
import Data from './../props/data.json'

const Members = () => {

    const JsonMember = Data.members.map(member => {
        const path = member.src
        return (
            <div className='member member-1' style={{ backgroundImage: `url(${path})` }}>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>{member.name}</h1>
                    <h3 className='position'>{member.poition}</h3>
                    <h4 className='about'>{member.about}</h4>
                    <a href="#contact" className='contact-member'>
                        <span>{member.tele}<br />{member.gmail}</span>
                    </a>
                </div>
            </div>
        )
    })

    return (
        <div id='members' className='container members-container'>
            <h1 className='member-txt'>Members</h1>

            {JsonMember}
            {/* <div className='member member-1'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Sayed</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>I'm a front end now but I keep learning to become a Full Stack Developer. I'm ready to learn</h4>
                    <a href="#contact" className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div> */}

            {/* <div className='member member-2'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Sayed</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>I'm a front end now but I keep learning to become a Full Stack Developer. I'm ready to learn</h4>
                    <a href="#contact" className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div>

            <div className='member member-3'>
                <div className='member-img'></div>
                <div className='member-info'>
                    <h1 className='name'>Sayed</h1>
                    <h3 className='position'>Leader</h3>
                    <h4 className='about'>I'm a front end now but I keep learning to become a Full Stack Developer. I'm ready to learn</h4>
                    <a href="#contact" className='contact-member'>
                        <span>contact</span>
                    </a>
                </div>
            </div> */}

        </div>
    )
}

export default Members;