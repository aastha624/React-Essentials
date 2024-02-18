export default function CoreConcept(props){
    // use props also use another js featuers use ({})object pass directly property
    return(
      <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title} </h3>
       <p> {props.description}</p>
      </li>
    );
  }