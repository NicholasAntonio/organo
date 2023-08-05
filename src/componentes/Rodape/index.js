import './Rodape.css'

const Rodape = ()=>{
    return(
        <section className='rodape'>
            <div className='icones'>
                <img src='/imagens/fb.png' alt='fbLogo'/>
                <img src='/imagens/tw.png' alt='twLogo'/>
                <img src='/imagens/ig.png' alt='igLogo'/>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='logotipo da organo'/>
            </div>
            <div>
                <p>Intruido por Alura</p>
            </div>
        </section>
    )
}

export default Rodape