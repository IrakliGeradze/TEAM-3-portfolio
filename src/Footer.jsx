import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div className="footer">
            <div className="startt">
                <p>Contact</p>
                <br />
                <p id="bigger">Let's start creating together</p>
                <br />
                <Link to='/contact'><button>Let's Talk <span id="move">🡥</span></button></Link>
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
                <p>2026 © Team 3, All Rights Reserved. By: Irakli Geradze, Vato Tabatadze, Dachi Tetradze</p>
            </div>
            <div className="te">
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/work'>Work</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
                <div className="otherlinks">
                <Link to='https://www.linkedin.com/in/irakli-geradze-5b3a5b397/'>LinkedIn 🡥</Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer;