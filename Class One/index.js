const root = ReactDOM.createRoot(document.getElementById("root"));
//Here we are creating a root where the React will specifically work on.

const heading1 = React.createElement(
    "h1",
    {
        id : "title"
    },
    "Heading 1"
);
//Here we create an element for h1 tag with id = title and content = "Heading1".

const heading2 = React.createElement(
    "h2",
    {
        id:"title"
    },
    "Heading 2"
);
//Here we again create an element but for h2 tag with id = title and content = "Heading2".

const container = React.createElement("div",{id:"container"},[heading1,heading2]);
//Here we create an element for div tag with id = container which will contain the heading1 &heading2 tags in them.

root.render(container); 
//Here the DOM(Document Object Model) is manipulated and the div element with container id is appended to the root.