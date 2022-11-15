import { Route, Routes } from "react-router-dom"
import LoginForm from "../../components/auth/LoginForm"

const Login = ({ setIsLogged, setCookie }: any) => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm setIsLogged={setIsLogged} setCookie={setCookie}/>} />
        </Routes>
    )
}

export default Login