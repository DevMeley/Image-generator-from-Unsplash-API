import React from 'react'
import "../src/App.css"

export default function Nav({query, setQuery, searchResult}) {
  return (
    <div>
        <div className="hero">
            <div className="logo"><span className="span">Foto</span>Gen</div>
            <div className="search">
                <input type="text" value={query}
                onChange={(e)=> setQuery(e.target.value)}/>
            </div>
        </div>
    </div>
  )
}
