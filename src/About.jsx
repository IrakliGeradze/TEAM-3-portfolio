import irakli from './assets/irakli.png'
import vato from './assets/vato.png'
import dachi from './assets/dachi.png'
import Scroll from './scroll'
import background from './assets/123.png'
import background1 from './assets/1234.png'

function About(){
    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Scroll>
        <div className="smallText">
        <p>Team 3 Members</p>
        </div>
        <br />
        <br />
        <div className="text">
        <p>Meet Team 3 Members, <span id='gray'>
            the talented minds behind Team 3. Let’s build something amazing together.</span></p>
            <br />
        </div>
        </Scroll>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Scroll>
        <div className="dachi">
            <img src={dachi} alt="" />
            <div className="font">
                <p id='first'>Dachi Tetradze</p>
                <p>Frontend Developer || Designer || IOS Developer</p>
            </div>
        </div>
        </Scroll>
        <hr />
        <Scroll>
        <div className="irakli">
            <img src={irakli} alt="" />
            <div className="font">
                <p id='first'>Irakli Geradze</p>
                <p>Full Stack Developer || IOS Developer || UX/UI Designer</p>
            </div>
        </div>
        </Scroll>
        <hr />
        <Scroll>
        <div className="vato">
            <img src={vato} alt="" />
            <div className="font">
                <p id='first'>Vato Tabatadze</p>
                <p>Backend Developer || Game Developer || Software Engineer</p>
            </div>
        </div>
        </Scroll>
        <img id='or' src={background} alt="" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Scroll>
        <div className="didi">
        <div className="smallTex">
            <p>Our Mission</p>
        </div>
        <div className="shuatana">
            <p className="mission-text">
                We believe in the power of website to inspire and make a meaningful impact. 
                We aim to transform ideas into captivating websites. 
            </p>
            <br />
            <p className="mission-text">We strive to bring creativity and functionality together, <span id='gray'>crafting solutions that resonate with your audience. </span></p>
        </div>
        <div className="bolo">
            
        </div>
        </div>
        </Scroll>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img id='or' src={background1} alt="" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Scroll>
        <div className="didi">
        <div className="smallTex">
            <p>How We Work</p>
        </div>
        <div className="shuatana">
            <p className="mission-text">
                Join us in exploring a digital creative process where <span id='gray'>simplicity enhances the beauty and efficacy</span> of every website endeavor.
            </p>
            <br />
            <p style={{fontSize: '25px'}}>01 Discover Needs</p>
            <p style={{fontSize: '20px'}}><span id='gray'>We delve deep into understanding your brand, target audience, and objectives, unraveling the insights that will shape our creative journey.</span></p>
            <br />
            <p style={{fontSize: '25px'}}>02 Design Experience</p>
            <p style={{fontSize: '20px'}}><span id='gray'>Armed with insights, our design experts bring concepts to life, seamlessly blending aesthetics and functionality for a visually stunning and user-centric experience.</span></p>
            <br />
            <p style={{fontSize: '25px'}}>03 Website Experience</p>
            <p style={{fontSize: '20px'}}><span id='gray'>Armed with insights, our website experts bring concepts to life, seamlessly blending aesthetics and functionality for a visually stunning and user-centric experience.</span></p>
            <br />
            <p style={{fontSize: '25px'}}>04 Deliver Project</p>
            <p style={{fontSize: '20px'}}><span id='gray'>The culmination of our collaborative efforts results in the delivery of a polished, cohesive digital experience that not only meets but exceeds your expectations.</span></p>
        </div>
        <div className="bolo">
            
        </div>
        </div>
        </Scroll>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    )
}

export default About;