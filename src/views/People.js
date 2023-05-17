import { useEffect, useRef, useState } from 'react';
import '../App.css';
import Field from '../components/Field';
import * as PeopleController from '../controllers/PeopleController';
import PeopleList from '../components/PeopleList';

function People() {


    const listRef = useRef();

    const editPerson = (data) => {
      //como o json que vem do server é exatamente igual ao json do nosso state basta:
      setDados(data);
      console.log(data);
    }

    //funcao para identificar quando a tela é carregada
    useEffect(() => {
      console.log("Carregou a tela")
      listRef.current.refresh();
    },[]);//adicione esses dois colchetes para garantir que só será acionada uma vez
    //essa função na verdade fica verificando qualquer variável
    //se voce quiser, pode usá-la para saber quando uma variável mudou de valor
    //basta adicionar as variáveis que deseja observar dentro do colchete
  

  var formDados = {
    'firstName':'',
    'lastName':'',
    'email':'',
    'cpf':'318.157.820-72',
    'address':{'street':'', 'city':''}
  }

  const clearForm = () => {
      setDados(formDados);
  }

  const [dados, setDados] = useState(formDados);

  
  const handleInput = (evt, item) => {
    let name = evt.target.name;
    let value = evt.target.value;

    if (item != undefined){
      setDados({...dados, [item]:{...dados[item], [name]:value}});
    } else {
      setDados({...dados, [name]:value});
    }

  }


  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (dados._links != undefined) {
      PeopleController.update(dados).then(() => listRef.current.refresh());
    } else {
      PeopleController.save(dados).then(() => listRef.current.refresh());
    }

  }


  const deletePerson = () => {
    PeopleController.remove(dados).then(()=> {
      listRef.current.refresh();
      clearForm();
    });
  }

  


  return (
    <div className="App">
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>

      <h1>Pessoas</h1>

      <div className="d-flex justify-content-center align-items-center">
        
        <div className="container card col-sm-4 text-start">


          <form onSubmit={handleSubmit}>

            <Field name="firstName" label="Primeiro nome" onChange={(evt) => handleInput(evt)} value={dados.firstName}></Field>

            <Field name="lastName" label="Último nome" onChange={(evt) => handleInput(evt)} value={dados.lastName}></Field>

            <Field name="email" label="E-mail" onChange={(evt) => handleInput(evt)} value={dados.email}></Field>

            <Field name="cpf" label="CPF" onChange={(evt) => handleInput(evt)} value={dados.cpf}></Field>

            <Field name="street" label="Rua" onChange={(evt) => handleInput(evt, 'address')} value={dados.address.street}></Field>
            
            <Field name="city" label="Cidade" onChange={(evt) => handleInput(evt, 'address')} value={dados.address.city}></Field>

            <div className="row p-3">
              <button className="btn btn-primary col-sm-6">Salvar</button>
            </div>

            {dados._links &&
                <button type="button" className="btn btn-danger col-sm-6" 
                  onClick={deletePerson}>Deletar</button>
            }

          </form>


          <PeopleList ref={listRef} onEdit={editPerson}></PeopleList>

        </div>
      </div>

      
    </div>
  );
}

export default People;
