import images from "./imageImporter"

export default function Card(props){
    return (
        <div className="card">
            <img src={`./assets/characters/${props.name}.jpg`}/>
            <h1>{props.name}</h1>
        </div>
    )
}