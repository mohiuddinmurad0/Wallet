import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BillContextProvider from './Context/BillContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <BillContextProvider>
    <App />
  </BillContextProvider>
  </BrowserRouter>,
)
