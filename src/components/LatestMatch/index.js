// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="ct-date-venue-result-img">
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>

          <img
            height={100}
            width={130}
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>

        <div className="fi-si-mom-ump">
          <p className="head">First Innings</p>
          <p>{firstInnings}</p>
          <p className="head">Second Innings</p>
          <p>{secondInnings}</p>
          <p className="head">Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p className="head">Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
