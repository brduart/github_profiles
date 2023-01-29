import { Link } from 'react-router-dom'
import Style from './resultscard.module.css'

const ResultsCard = ({avatarurl, bio, location, login, followers, following, htmlurl}) => {
  return (
    <div className={Style.container}>
        <div className={Style.profilepic}>
            <img src={avatarurl} alt="" />
        </div>
        <div className={Style.infos}>
            <div className={Style.bio}>
                <h1>{login}</h1>
                <p>{bio}</p>
                <p>{location}</p>
            </div> 

            <div className={Style.follow}>
                <p>{followers} <span>Seguidores</span></p>
                <p>{following} <span>Seguindo</span></p>
            </div>
        </div>
        <div className={Style.links}>
            <a href={htmlurl} target="_blank" rel="noopener noreferrer">Ir para o Github</a>
        </div>
    </div>
  )
}

export default ResultsCard