import {Link} from 'react-router-dom';
import Field from '../components/Field';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home(props) {

    
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);

    const [dados, setDados] = useState({
        'email':'',
        'password':'',
      });

    const handleInput = (evt, item) => {
        let name = evt.target.name;
        let value = evt.target.value;
        setDados({...dados, [name]:value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (dados.email == 'admin@gmail.com') {
            localStorage.setItem("token", "[UMTOKENQUALQUER]");
            navigate("/people");
        } else {
            setMessage("E-mail ou senha incorreto");
        }
    }


    return <div class='container'>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>

                <h1>Home</h1>
                <Link className="nav-link" to="/people" aria-disabled="true">People</Link>

                <form  onSubmit={handleSubmit}>

                    {message &&
                        <span style={{color:'red'}}>{message}</span>
                    }

                    <Field name="email" label="E-mail"
                        value={dados.email}
                        onChange={(evt) => handleInput(evt)}></Field>

                    <Field name="password" label="Senha"
                        value={dados.password}
                        type="password"
                        onChange={(evt) => handleInput(evt)}></Field>

                    <div className="row p-3">
                        <button className="btn btn-primary col-sm-6">Entrar</button>
                    </div>
                </form>
            </div>



}
