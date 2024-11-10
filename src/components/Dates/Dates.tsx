'use client';
function Dates() {
    const ourDate:Date = new Date();
    const ourDay:number = ourDate.getDay();
    const ourDat:number = ourDate.getDate();
    const ourMonth:number = ourDate.getMonth(); 
    const dayList:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthList:string[] = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    return (
      <>
       <div className="date">
       <h3><span className="month">{monthList[ourMonth]},</span><span className="day">{dayList[ourDay]}</span><span className="date">{ourDat}</span></h3>
       </div>
      </>
    )
  }
  
  export default Dates
  