import './footer.css'

const Footer = ()=>{
    return(
        <section className='footer'>
            <div className='icons'>
                <img src='/imgs/fb.png' alt='fbLogo'/>
                <img src='/imgs/tw.png' alt='twLogo'/>
                <img src='/imgs/ig.png' alt='igLogo'/>
            </div>
            <div className='logo'>
                <img src='/imgs/logo.png' alt='logotipo da organo'/>
            </div>
            <div>
                <p>Intruido por Alura</p>
            </div>
        </section>
    )
}

export default Footer