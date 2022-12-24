const root = React.createRoot(document.getElementById("root"));

const heading = ReactDOM.createElement(
    "h1",
    {
        id : "title"
    },
    "Hello World"
)

root.render(heading);