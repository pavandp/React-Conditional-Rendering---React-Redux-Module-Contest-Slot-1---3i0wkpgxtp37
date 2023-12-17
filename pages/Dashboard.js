import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { } = useContext(AuthContext);
  const [btn1,setBtn1]=useState(true);
  const [btn2,setBtn2]=useState(true);

  return (
    <div id="dashboardPage">
      <button id="btn1" onClick={(e)=>{setBtn1(!false?false:true)}}>Button 1</button>
      <button id="btn2" onClick={(e)=>{setBtn2(!false?false:true)}}>Button 2</button>
      {(btn1 && btn2)?
      <div className="msg">Both are true</div> :
      ((!btn1 && !btn2)? <div className="msg">Both are false</div> :
      <div className="msg">One on them is false</div> )}
      

    </div>
  );
}
export default Dashboard;
