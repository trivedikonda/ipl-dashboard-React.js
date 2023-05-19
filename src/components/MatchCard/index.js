// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  return (
    <li className="match-card">
      <img
        width={80}
        height={90}
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
