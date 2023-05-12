

export default function Field (props){

    let id = props.name;
    if (props.id != undefined){
        id = props.id;
    }
   
    return <div className="col-sm p-1">
            <label htmlFor={id}
                className="form-label">{props.label}</label>
            <input type={props.type} className="form-control"
                name={props.name}
                id={id} placeholder={props.placeholder}
                value={props.value}
                onChange={(evt) => props.onChange(evt)}/>
          </div>
}
