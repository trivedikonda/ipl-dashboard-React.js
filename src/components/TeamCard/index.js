// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="each-team-card">
        <img height={130} width={100} src={teamImageUrl} alt={`${name}`} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
