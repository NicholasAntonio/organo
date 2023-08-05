import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time,colaboradores, aoDeletar}) => {
    const css = { backgroundColor: time.corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {

                    return <Colaborador corDeFundo={time.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar}/>
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Time