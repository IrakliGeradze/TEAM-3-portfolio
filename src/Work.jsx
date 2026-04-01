import Scroll from "./scroll";
import cashio from './assets/cashio.png'
import cashioIos from './assets/cashioio.png'
import winebar from './assets/winebar.png'
import apple from './assets/apple.png'
import dopress from './assets/dopress.png'
import dopress1 from './assets/dopress1.png'
import dash from './assets/dashed.png'
import ochoimport from './assets/ochoimport.png'
import github from './assets/github.svg'


function work(){
    function cashio1(){
        window.location.href='https://cashiobank.vercel.app/index.html'
    }
    function macbook(){
        window.location.href='https://ocho-apple.vercel.app/'
    }
    function wine(){
        window.location.href='https://wine-bar-project.vercel.app/'
    }
    function Dopress(){
        window.location.href='https://do-press.vercel.app/'
    }
    function Dash(){
        window.location.href='https://abatugaaswreb.vercel.app/'
    }
    function Ocho(){
        window.location.href='https://ocho-import.vercel.app/'
    }
    function Git(){
        window.location.href='https://github.com/IrakliGeradze'
    }
    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Scroll>
        <br />
        <br />
        <div className="text">
        <p>See how we've turned ideas into reality. Dive into the stories of <span id='gray'>
            successful products that make a difference.</span></p>
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
        <Scroll>
        <div className="container">
            <div className="first">
                <img src={cashio} alt="" />
            </div>
        <div className="second">
            <img id='ios' src={cashioIos} alt="" />
        </div>
        </div>
        <div className="smallText">
            <p id='ppp'>Bank Application.</p>
            <p id='big'>Cashio Bank Website</p>
        <br />
        <button onClick={cashio1}><p>Visit Website 🡥</p></button>
        </div>
        </Scroll>
        <br />
        <br />
        <Scroll>
        <div className="container">
        <div className="column">
            <div className="firstt">
            <img id='apple' src={apple} alt="" />
            </div>
            <div className="smallTextt">
            <p id='ppp'>Apple Store.</p>
            <p id='big'>Macbook Pro Apple Website</p>
            <br />
            <button onClick={macbook}><p>Visit Website 🡥</p></button>
            </div>
        </div>
        <div className="column">
            <div className="second">
            <img id='wine' src={winebar} alt="" />
            </div>
            <div className="smallTextt">
            <p id='ppp'>Wine Bar.</p>
            <p id='big'>Wine Bar Website</p>
            <br />
            <button onClick={wine}><p>Visit Website 🡥</p></button>
            </div>
        </div>
        </div>
        </Scroll>
        <br />
        <br />
        <br />
        <Scroll>
        <div className="container">
            <div className="first">
                <img src={dopress} alt="" />
            </div>
        <div className="second">
            <img id="dash" src={dopress1} alt="" />
        </div>
        </div>
        <div className="smallText">
            <p id='ppp'>Button Press Game.</p>
            <p id='big'>DoPress</p>
        <br />
        <button onClick={Dopress}><p>Visit Website 🡥</p></button>
        </div>
        </Scroll>
        <br />
        <br />
        <br />
        <Scroll>
        <div className="container">
        <div className="column">
            <div className="firstt">
            <img id='apple' src={dash} alt="" />
            </div>
            <div className="smallTextt">
            <p id='ppp'>Dash Car Game</p>
            <p id='big'>Dash</p>
            <br />
            <button onClick={Dash}><p>Visit Website 🡥</p></button>
            </div>
        </div>
        <div className="column">
            <div className="second">
            <img id='wine' src={ochoimport} alt="" />
            </div>
            <div className="smallTextt">
            <p id='ppp'>Car Import.</p>
            <p id='big'>Ocho Import</p>
            <br />
            <button onClick={Ocho}><p>Visit Website 🡥</p></button>
            </div>
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
        <Scroll>
        <div className="didi">
            <div className="smallTex">
                <p>GitHub</p>
            </div>
            <div className="shuatana">
                <p>See more our projects in <span id='gray'>GitHub Repositories.</span></p>
            </div>
            <div className="bolo">
                <button onClick={Git}><img style={{width: '50px'}} src={github} alt="" /></button>
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
        <br />
        <br />
        <br />
        </>
    )
}

export default work;