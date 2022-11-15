import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

const Dashboard = () => {
  return (
    <>
    <div>Dashboard</div>
    <Link to='/cms/projects' ><Button>To Projects</Button></Link>
    </>
  )
}

export default Dashboard