const paragraph = React.createElement(
    "div", 
    {id: "parent"},[
     React.createElement("div", {id: "child"}, [
        React.createElement("h4", {}, "h4 tag from REACT child1"),
        React.createElement("h5", {}, "h5 tag from REACT child1")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h4", {}, "h4 tag from REACT child2"),
        React.createElement("h5", {}, "h5 tag from REACT child2")
    ])
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(paragraph)