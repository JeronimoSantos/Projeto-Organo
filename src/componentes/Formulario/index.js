import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const onSalvar = (evento) => {
        evento.preventDefault()
        props.onColaboradorCadastrado({
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
        <section className= "formulario">
            <form onSubmit={onSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                   obrigatorio={true} 
                   label="Nome" 
                   placeholder="Digite o seu nome"
                   valor={nome}
                   onAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                   obrigatorio={true} 
                   label="Cargo" 
                   placeholder="Digite o seu cargo"
                   valor={cargo}
                   onAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                   label="Imagem" 
                   placeholder="Informe o endereço da imagem"
                   valor={imagem}
                   onAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                   obrigatorio={true} 
                   label="Time" 
                   itens={props.times}
                   valor={time}
                   onAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
};

export default Formulario;