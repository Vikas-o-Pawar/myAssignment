import React from 'react'
import movieContext from './MovieContext'

const movieContextObj = React.createContext({
    id: null
})

export default function MovieContextProvider(props) {
  return (
    <movieContext.Provider value={movieContextObj}>
        {props.children}
    </movieContext.Provider>
  )
}
