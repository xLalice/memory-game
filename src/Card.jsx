export default function Card(props){
    return (
        <div class="card">
            <img src={`./assets/characters/${props.name}.jpg`}/>
            <h1>{props.name}</h1>
        </div>
    )
}