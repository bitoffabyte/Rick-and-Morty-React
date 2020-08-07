import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Header from './Components/Ui/Header'
import CharGrid from './Components/Characters/Characters'
import Search from './Components/Ui/Search'

const App = () => {
  const [char, setChar] = useState({})
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchItems = async () => {


      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`);
        // Success 🎉
        setChar(res.data)
        // console.log(res.data)
        setisLoading(false)
        // console.log(res);
      } catch (error) {
        // console.log("asdfsdfghsdbfkuigdfhsuigeasberror");
        setChar({})

      }
    }

    fetchItems()
  }, [query])
  const getQuery = (e) => {
    setQuery(e)
  }
  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(a) => getQuery(a)}
      />
      <CharGrid
        isLoading={isLoading}
        chars={char}
      />
    </div>
  );
}

export default App;
