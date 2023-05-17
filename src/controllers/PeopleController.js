import axios from "axios";
import { WS_URL } from "../config";

export function save(data){
    /**
     * A promise permitirá que nós usemos o .then na hora de chamar essa função
     * normalmente usa-se promises para chamadas assíncronas
     * também é possível usar wait no lugar de Promise
     * uma promise não pode retornar nada, na verdade o retorno é o resolve()
     */
    return new Promise((resolve) => {
        console.log("salvar:");
        console.log(data);

        axios.post( WS_URL + "/people/",data).then(resp => {
            console.log(resp);
            resolve(resp);
        }).catch(err => {
            console.log(err);
            resolve(false);
        });
    });

}



export function update(data){
   
    return new Promise((resolve) => {
        console.log("atualizar:");
        console.log(data);
        axios.put(data._links.person.href,data).then(resp => {
            console.log(resp);
            resolve(resp);
        }).catch(err => {
            console.log(err);
            resolve(false);
        });
    });
}


export function remove(data){
   
    return new Promise((resolve) => {
        console.log("deletar:");
        console.log(data);
        axios.delete(data._links.person.href).then(resp => {
            console.log(resp);
            resolve(resp);
        }).catch(err => {
            console.log(err);
            resolve(false);
        });
    });
}



export function getAll(){
    return new Promise((resolve) => {
        axios.get(WS_URL + "/people").then(resp => {
            resolve(resp);
        }).catch(err => {
            resolve(false);
        });
    });
}

