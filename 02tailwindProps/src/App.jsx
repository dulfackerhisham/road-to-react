import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='text-4xl bg-orange-600 p-4 rounded-lg' >Hello World with tailwind</h1>
      <Card username="hisham" post='Python fullstack developer'/>
      <Card username="basim"  />
      <Card />
    </>
  )
}

export default App
