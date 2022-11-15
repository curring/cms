import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const Projects = () => {
  return (
    <>
    <div>Projects</div>
    <Link to='/cms' ><Button>To Dashboard</Button></Link>
    </>
  )
}

export default Projects