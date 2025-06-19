import { useState } from "react";
import Navigation from "./components/Navigation";
import Table from "./components/Table";
const App = () => {
  const [count, setCount] = useState(0);

  const data1 = [

     {
      name: "GMIT",
      value: 1,
     },
      {
      name: "UBIT",
      value: 2,
     },
      {
      name: "SIT",
      value: 3,
     },
      {
      name: "STJBIT",
      value: 4,
     },
  ];
  
  return (
    <div className="container">
      <Navigation />
      <Table data={data1} c={count} setFn={setCount} />
      {/*<Table data={data2} /> */}
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
    </div>
  );
};
export default App;