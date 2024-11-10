'use client';
import { useEffect, useState } from "react";
function Time() {
  const [hour,setHour] = useState(0);
  const [mins,setMin] = useState(0);
  const [sec,setSec] = useState(0);
  useEffect(() => {

   const interval =  setInterval(() => {
        const ourDate:Date = new Date();
        const digiHours:number = ourDate.getHours();
        const digiMins:number = ourDate.getMinutes();
        const digiSec:number = ourDate.getSeconds();
        setHour(digiHours);
        setMin(digiMins);
        setSec(digiSec);
      },1000)
      return () => clearInterval(interval);
  },[]);
  
  const decreaseHour = hour > 12 ? hour-12 : hour;
  return (
    <>
      <div className="time">
        <div className="time-one">
            <h1><span className="hour">{decreaseHour < 10 ? "0"+decreaseHour : decreaseHour}</span><span className="coln">:</span><span className="min">{mins < 10 ? "0"+mins : mins}</span></h1>
        </div>
        <div className="time-two">
            <h3 className="ampm">{hour<12 ? "AM" : "PM"}</h3>
            <h3 className="sec">{sec < 10 ? "0"+sec : sec}</h3>
        </div>
      </div>
    </>
  )
}

export default Time;