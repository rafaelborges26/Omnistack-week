import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const CreatePoint = () => {
    return (
        <div id="page-create-point">
        <header>
            <img src={logo} alt="Ecoleta"/>
            <Link to="/">
                <FiArrowLeft/>
                Voltar para home
            </Link>
        </header>

        <form> 
            <h1>Cadastro do ponto de coleta</h1>

            <fieldset>
                <legend>
                    <h2>Dados</h2>
                </legend>
            </fieldset>

            <div className="field">
                    <label htmlFor="name">Nome da entidade</label>
                    <input type="text"
                           name="name"
                           id="name"
                    />
            </div>

            <div className="field-group">
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                           name="email"
                           id="email"
                    />
                </div>
                <div className="field">
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input type="text"
                           name="whatsapp"
                           id="whatsapp"
                    />
                </div>
            </div>

            <fieldset>
                <legend>
                    <h2>Endereço</h2>
                    <span>Selectione o endereço no mapa</span>
                </legend>
            </fieldset>

            <fieldset>
                <legend>
                    <h2>Ítens de Coleta</h2>
                </legend>
            </fieldset>

        </form>
        </div>



    )
        
} 

export default CreatePoint