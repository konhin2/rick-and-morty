// Imports
// Crear Rutas dentro de nuestra app
// How to use Link
// Nested routes with V6
// Routes of dynamix Segments
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import NotFound from "./components/NotFound"
import Characters from "./pages/Characters"
import Character from "./pages/Character"
import RickAndMorty from './rickAndMorty.json'

const About = () => <h1>About</h1>;
const Home = () => <h1>Home</h1>;
const QA = () => <h1>QA</h1>;

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/characters" element={<Characters data={RickAndMorty} />} >
              <Route path=":id" element={<Character data={RickAndMorty} />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/QA" element={<QA />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}