import { useState } from "react";

function Form () {
    
    const [addLearner, setAddLearner] = useState({
        FirstName: "",
        LastName: "",
        Score: "",
        Date: "",
      });
      const handleAdd = (e) => [
        setAddLearner({
          ...addLearner,
          [e.target.name]: e.target.value,
        }),
      ];

    return(
        <div> 
        <h1> Add a New Learner Here</h1>
           <label>
        First Name:
        <input
          name="firstName"
          value={addLearner.firstName}
          onChange={handleAdd}
        />
      </label>
      <br/>

      <label>
        Last Name:
        <input
          name="lastName"
          value={addLearner.lastName}
          onChange={handleAdd}
        />
      </label>
      <br/>

      <label>
        Score:
        <input 
        name="score" 
        value={addLearner.score} 
        onChange={handleAdd} />
      </label>
      <br/>

      <label>
        Date:
        <input 
        name="date" 
        value={addLearner.date} 
        onChange={handleAdd} />
      </label>
      
    <br/>

</div>

    )
}

export default Form