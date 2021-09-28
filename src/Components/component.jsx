const person = {
    name: "Name",
    surname: "Surname"
};

function Element(props) {
    return ( 
        <div>
        <h1>Hello world123, 5 + 5 is {5 + 5}</h1>
        <small>Small text, {person.name}, {person.surname}</small>
        <div>Props: {props.name}, {props.surname}</div>
        </div>);
}


export default Element;