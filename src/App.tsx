
import './App.css'
import useLogged, {setCookie} from './hooks/useLogged'
import Login from './pages/auth/Login'
import Cms from './pages/cms/Cms'

const App = () => {

  const [isLogged, setIsLogged] = useLogged();

  return !isLogged ? <Login setIsLogged={setIsLogged} setCookie={setCookie} /> : <Cms/>
      
}

export default App
