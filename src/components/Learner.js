import Score from './Score'


function Learner ({learner}) {
    console.log(learner);
    return(
        <div> 
            
            <h2>{learner.name}</h2>
            <h5>{learner.bio} </h5>
            {learner.scores.map((score, i)=>(
                <Score score = {score} key={i} />
            ))}
        </div>
    )
}

export default Learner