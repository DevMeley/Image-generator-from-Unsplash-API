import { useState } from 'react'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import './App.css'

function App() {
  const [query, setQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  return (
    <>
      <Nav query={query} setQuery={setQuery} setSearchResult={setSearchResult}/>
      <Home query={query} searchResult={searchResult} setSearchResult={setSearchResult}/>
      <Footer />
    </>
  )
}

export default App
