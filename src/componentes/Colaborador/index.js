import './colaborador.css'
import {BsFillTrashFill, AiFillHeart, AiOutlineHeart} from 'react-icons/bs'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }
    const propsFavorito = {
        size:25,
        onclick: favoritar
    }
    return (<div className="colaborador">
        <BsFillTrashFill size={25} className='deletar' onClick={()=> aoDeletar(colaborador.id)}></BsFillTrashFill>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? <AiFillHeart {...propsFavorito} color='#ff0000'/> : <AiOutlineHeart {...propsFavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador