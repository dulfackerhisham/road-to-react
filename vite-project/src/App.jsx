import Whatsapp from "./Whatsapp"

const title = <h1>Vite app title</h1>


const greet = "good morning"
function App() {

  return (
    <>
    {title}
    <title></title>
    <h3> vite App Component {5 + 5}</h3>
    {greet}
    <Whatsapp />
    {Whatsapp()}
    </>
  )
}

export default App
