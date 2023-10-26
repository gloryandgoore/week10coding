import "./App.css";
import InputForm from "./InputForm";
import DisplayDetails from "./DisplayDetails";
import { useState } from "react";

function App() {

  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = (details) => {
    setUserDetails(details);
  };

  return (
    <div className="App">
<div>
    <InputForm onSubmit={handleSubmit} />
    {userDetails && <DisplayDetails details={userDetails} />}
</div>
    </div>
  );
}

export default App;
