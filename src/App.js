// import logo from './logo.svg';
import learnerData from './data/learnerData';
import {useState} from 'react';
import Learner from './components/Learner';
import './App.css';

function App() {

  const [learners, setLearners] =useState(learnerData)
  console.log(learners);
//* Create a new state passing the learnerData
//* useState(learnerData)
//* const [learners, setLearners] = useState(learnerData)

  return (
    <div className="App">
        <h1> Learner App </h1>
        {learners.map ((learner, i) => (
                <Learner key={i} learner ={learner}/>
            ))}
        {/* <Learner learners = {learners}/> */}
        {/* <learnerData></learnerData> */}
    </div>
  );
}

export default App;
