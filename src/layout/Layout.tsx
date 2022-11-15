import { Container } from "semantic-ui-react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: any) => {
    return (
        <Container fluid>
            <Header/>
            {children}
            <Footer/>
        </Container>
    )
}

export default Layout