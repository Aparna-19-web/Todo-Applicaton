import ReactDom from "react-dom";
import Todo from "./Todo";



function App()
{
    return(
        <div>
            <Todo/>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById("root"))