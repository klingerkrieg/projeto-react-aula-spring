import { useState, forwardRef, useImperativeHandle } from 'react';
import * as PeopleController from '../controllers/PeopleController';

//export default function PeopleList(pessoas){

const PeopleList = forwardRef((props, ref) => {
    
    useImperativeHandle(ref, () => ({
      refresh() {
        getList();
      }
    }));

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getList = () => {
        if (!loading) {
          console.log("Carrega lista:");
          setLoading(true);
          PeopleController.getAll().then(resp => {
            console.log(resp.data._embedded.people);
            setData(resp.data._embedded.people);
            setLoading(false);
          })
        }
    }


    return <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Último nome</th>
                    <th scope="col">E-mail</th>
                </tr>
                </thead>
                <tbody>

                {data.map(function(item,i){ 
                    return <tr key={i}>
                            <td><button className='btn btn-primary' onClick={() => props.onEdit(item)}>Editar</button></td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                        </tr>
                    }
                )}


                {/* as formas a seguir também são válidas */}
                {/*data.map(item => {
                    return <tr><td></td><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.email}</td></tr>
                })*/}

                {/*data.map(item => <tr><td></td><td>{item.firstName}</td><td>{item.lastName}</td><td>{item.email}</td></tr>)*/}

                
                </tbody>
            </table>

})

export default PeopleList;