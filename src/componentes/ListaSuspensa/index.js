import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='Lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.onAlterado(evento.target.value)} required={props.required} valor={props.valor}>
                <option value={''}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;