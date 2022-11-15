import { Icon, Menu } from "semantic-ui-react";
import useLogged, { setCookie } from "../hooks/useLogged";

const Header = () => {
    const [isLogged, setIsLogged] = useLogged();

    const handleLogout = () => {
        setCookie("username", '', -1)
        window.open('/', '_self')
    }

    return (
        <Menu inverted icon="labeled">
            <Menu.Item
                name='sign-out'
                onClick={ handleLogout }
            >
                <Icon name='sign-out' />
                <span>logout</span>
            </Menu.Item>

        </Menu>
    )
}

export default Header