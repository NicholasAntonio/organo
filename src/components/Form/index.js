import TextField from "../TextField";
import "./Form.css";
import List from "../List";
import Button from "../Button";
import { useState } from "react";


const Form = (props) => {
 
 const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time,setTime] = useState('');

  const onSave = (event)=>{
    event.preventDefault();
    props.onRegisteredEmployee({
      nome,
      cargo,
      imagem, 
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }
  return (
    <section className = 'form'>
      <form onSubmit = {onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" value={nome} onChange={value=> setNome(value)} placeholder="Digite seu nome" />
        <TextField required={true} label="Cargo" value={cargo} onChange={value=> setCargo(value)} placeholder="Digite seu cargo" />
        <TextField  label="Imagem" value={imagem} onChange={value=> setImagem(value)} placeholder="Digite o endereço da imagem" />
        <List required={true} label='Time' value={time} onChange={value=> setTime(value)} itens = {props.teams}/> 
        <Button>
          Criar Card
        </Button>
    
      </form>
    </section>
  );
};

export default Form;
