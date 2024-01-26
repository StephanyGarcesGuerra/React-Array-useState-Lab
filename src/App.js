// import logo from './logo.svg';
import learnerData from './data/learnerData';
import {useState} from 'react';
import Learner from './components/Learner';
import './App.css';
import Form from './components/Form';

function App() {

  function handleClick(){
    console.log('button clicked')
  }


  const [learners, setLearners] =useState(learnerData)
  console.log(learners);
//* Create a new state passing the learnerData
//* useState(learnerData)
//* const [learners, setLearners] = useState(learnerData)

  return (
    // <div>
    //   <button type="button"> Add new Learner</button>
    // </div>

    <div className="App">
        <h1> Learner Information </h1>   
       {/* <Button name="Add New Learner"/> */}
        {learners.map ((learner, i) => (
                <Learner key={i} learner ={learner}/>
            ))}
        {/* <Learner learners = {learners}/> */}
        {/* <learnerData></learnerData> */}
        <Form/>
        <button type ="submit" onClick={handleClick} > Submit</button>
        <br/>
        <br/>
        <br/>
    </div>
  );
}


export default App;
