import './employee.css'

const Employee = (props) => {
    return(
        <div className='employee'>
            <div className='header'>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Employee