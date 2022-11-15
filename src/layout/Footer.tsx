import { useState } from "react"
import { Container, Icon, Menu } from "semantic-ui-react"

const Footer = () => {

  const [activeItem, setActiveItem] = useState()

  const handleItemClick = (item: any) => {
    console.log(item)
    setActiveItem(item)
  }
  return (
    <Container fluid style={{ backgroundColor: 'lightblue', display: 'flex'}}>
      <Container style={{width: '100%'}}>
        <p>© Texto Footer | 2022</p>
      </Container>
    </Container>
  )
}

export default Footer