'use client';
function Dates() {
    let ourDate:Date = new Date();
    let ourDay:number = ourDate.getDay();
    let ourDat:number = ourDate.getDate();
    let ourMonth:number = ourDate.getMonth(); 
    let dayList:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthList:string[] = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return (
      <>
       <div className="date">
       <h3><span className="month">{monthList[ourMonth]},</span><span className="day">{dayList[ourDay]}</span><span className="date">{ourDat}</span></h3>
       </div>
      </>
    )
  }
  
  export default Dates
  