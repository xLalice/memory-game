import "./Card.scss";

export default function Card(props){

    return (
        <div className="card" onClick={() => props.onClick(props.name)}>
            <img src={`characters/${props.name}.png`}/>
            <h1>{props.name}</h1>
        </div>
    )
}