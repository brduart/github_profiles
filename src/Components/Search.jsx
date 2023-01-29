import Style from './search.module.css'

import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

const Search = ({getUserOnApi}) => {

    const [searchUser, setSearchUser] = useState('')

  return (
    <div className={Style.container}>
        <div className={Style.search}>
            <input type="text" 
                name='search' 
                className={Style.input} 
                value={searchUser}
                placeholder='Procurar Repositório'
                onChange={(e) => setSearchUser(e.target.value)}/>
            <button type="submit" onClick={() => {
              setSearchUser('')
              getUserOnApi(searchUser)
            }}><BsSearch /></button>
        </div>
    </div>
  )
}

export default Search