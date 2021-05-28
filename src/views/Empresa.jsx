import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import DeleteComponent from '../components/DeleteComponent'
import Lista from '../components/Lista';
//Import utils
import { cambiarClases } from '../utils/cambiarClases';

class Empresa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indiceCiudad: -1,
            inputEmpresa: '',
            inputIndex: -1,
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() { 
        cambiarClases('Empresas');
        return (
            <div className='contenedor'>
                <div className='formulario' >
                    <AddComponent 
                    addItem={this.props.addItem}
                    handleInput={this.handleInput}
                    elemento={this.state.inputEmpresa}
                    nameInput='inputEmpresa'
                    indice={this.state.indiceCiudad}
                    msg='Empresa'
                    selector={true}
                    nameSelect='indiceCiudad'
                    msgSelect='Ciudad'
                    msgSelect2='countrieId'
                    lista={this.props.ciudades}
                    lista2={this.props.paises}
                    validar={true}
                    />
                    <hr className="formulario__separador" ></hr>
                    <DeleteComponent 
                    handleInput={this.handleInput}
                    deleteItem={this.props.deleteItem}
                    nameInput='inputIndex'
                    url='organizations'
                    indice={this.state.inputIndex}
                    idLista='listaEmpresas'
                    />
                </div>
                <Lista 
                lista={this.props.empresas}
                msg1='Empresa'
                msg2='name'
                />
            </div>
        );
    }
}
 
export default Empresa;