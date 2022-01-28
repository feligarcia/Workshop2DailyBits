import getData from "../components/getData"
import React from "react"
import { url } from "../helpers/url"
import { Component } from "react"
import { Inputs } from "./Login"
import styled from "styled-components"
import { Button } from "./Login"
import { Label } from "./Login"
import { DivLogin, ImgLogo } from "./Login"
import Logo from '../assets/images/Logo.png'


export default class CrearUsuario extends Component {
    
    constructor(){
        super()
        this.state ={
            form:{
                name: '',
                email: '',
                password: '',
                tiempoestudio:0,
                respcontest:0,
                respcorrec:0,
                respinco:0,
                imagen:'',
            },
            Usuarios:[],
        }
    }

handleInputCHanged = ({target}) => {
    this.setState({
        form:{
           ...this.state.form,
           [target.name]: target.value 
        }}
    )
    console.log(this.state.form)
}

async componentDidMount(){
    const listadoUsuarios = await getData(url)
    this.setState({Usuarios:listadoUsuarios})
    console.log(this.state)
}



handleSubmit = async (e) =>{
    e.preventDefault();
    await this.addData()
    const listadoUsuarios = await getData(url)
    this.setState({Usuarios:listadoUsuarios})
    console.log(this.state.Usuarios)
    
}


addData = async () =>{
await fetch(url, {
    method: 'POST',
    body: JSON.stringify(this.state.form),
    headers: {
        "Content-Type" : "application/json; charset=UTF-8"
    }
})
}
    render() {
        return (
            <DivLogin>
                <ImgLogo src={Logo}></ImgLogo>
                <h1>Crear Usuario<hr></hr></h1>
                        <form onSubmit={this.handleSubmit}>
                            <Label>Nombre</Label>
                            <Inputs
                                id="fileSelector"
                                type="text"
                                className="form-control "
                                placeholder="Nombre"
                                name="name"
                                required
                                onChange={this.handleInputCHanged}
                               />
                            <Label>Correo electrónico</Label>
                            <Inputs
                                type="text"
                                className="form-control mt-2"
                                name="email"
                                autoComplete="off"
                                placeholder="Correo electronico"
                                required
                                onChange={this.handleInputCHanged}
                                />
                            <Label>Contraseña</Label>
                            <Inputs
                                className="form-control mt-2"
                                autoComplete="off"
                                name="password"
                                placeholder="Constraseña"
                                required
                                onChange={this.handleInputCHanged}
                         
                            ></Inputs>
<Label>Imagen</Label>
<Inputs
                                className="form-control mt-2"
                                autoComplete="off"
                                name="imagen"
                                placeholder="url de tu imagen de usuario"
                                required
                                onChange={this.handleInputCHanged}
                         
                            ></Inputs>
                            <br></br>
                            <br></br>
                            <div >
                                <Button
                                    value="Save"
                                    type="submit"
                                    
                                > Guardar</Button>
                            </div>
                        </form>
                       
                        </DivLogin>
        );
    }
}
