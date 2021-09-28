const createDivText = (text) => {
    const element = document.createElement("div");
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
    return element;
}

const addClass = (element, className) => element.classList.add(className);

const root = document.getElementById("root");

const booktypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';

const books = JSON.parse(booktypes);

const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

animals.forEach(animal => {
    const element = createDivText(animal);
    addClass(element, "grozis");
    root.appendChild(element);
});

books.forEach(book => {
    const element = createDivText(book.title);
    root.appendChild(element);
})