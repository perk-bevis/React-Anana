import { Route, Routes } from "react-router-dom"
import { publicRouter } from "./routes/routes"
import MainLayout from "./pages/defaultlayout/MainLayout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {publicRouter.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      </Route>
    </Routes>
  )
}

export default App
