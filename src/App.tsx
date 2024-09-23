import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import QuestionAnswer from "./pages/question-answer";
import PageNotFound from "./pages/page-not-found";
import Result from "./pages/result";
import About from "./pages/about";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/home' Component={Home}/>
        <Route path='/test' Component={QuestionAnswer}/>
        <Route path='/result/:id' Component={Result}/>
        <Route path='/about' Component={About}/>
        <Route path='*' Component={PageNotFound}/>
      </Routes>
    </Router>
  )
}

export default App
