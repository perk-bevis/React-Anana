import { Route, Routes } from "react-router-dom"
import { publicRouter } from "./routes/routes"
import MainLayout from "./pages/defaultlayout/MainLayout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route>
          {publicRouter.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
