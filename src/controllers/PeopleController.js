import axios from "axios";

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

        axios.post("http://localhost:8080/people/",data).then(resp => {
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
        axios.get("http://localhost:8080/people").then(resp => {
            resolve(resp);
        }).catch(err => {
            resolve(false);
        });
    });
}

