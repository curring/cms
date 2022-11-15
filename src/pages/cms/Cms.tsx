import { Route, Routes } from "react-router-dom"
import Dashboard from "../../components/cms/Dashboard"
import Projects from "../../components/cms/Projects"
import Layout from "../../layout/Layout"

const Cms = () => {
    return (

        <Layout>
            <Routes>
                <Route path="/cms" element={<Dashboard />} />
                <Route path="/cms/projects" element={<Projects />} />
            </Routes>
        </Layout>
    )
}

export default Cms