import { useState } from 'react'

import Search from '../Components/Search'
import ResultsCard from '../Components/ResultsCard'
import ErrorPage from '../Components/ErrorPage'

import Style from './home.module.css'

const Home = () => {

  const [getUser, setGetUser] = useState(null)

  const [error, setError] = useState(false)

  const getUserOnApi = async(username) => {

    setError(false)
    setGetUser(null)

    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()

    if(res.status == 404) {
      setError(true)
    }
    else (
      setGetUser(data)
    )
    
  }

  return (
    <div className={Style.container}>
      <Search getUserOnApi={getUserOnApi}/>

      {error && (
        <ErrorPage />
      )}

      {getUser && (
        <ResultsCard 
        avatarurl={getUser.avatar_url} 
        bio={getUser.bio} 
        followers={getUser.followers} 
        following={getUser.following} 
        location={getUser.location} 
        login={getUser.login}
        htmlurl={getUser.html_url}/>
      )}
      

    </div>
  )
}

export default Home