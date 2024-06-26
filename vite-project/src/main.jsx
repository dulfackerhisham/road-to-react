import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https//google.com",
//         target: '_blank',
//     },
//     children: 'Click me to visit Google'
// }

const Hlo = () => (<h1>hlo arrow function</h1>);

const reactElement = <a href="http//google.com" target='_blank'> Visit Google</a>

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
