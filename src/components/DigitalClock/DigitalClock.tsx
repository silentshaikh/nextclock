import Dates from "../Dates/Dates"
import Time from "../Time/Time"




function DigitalClock() {
    return (
      <>
        <div className="digital-clock">
        <Time />
        <Dates/>
        </div>
      </>
    )
  }
  
  export default DigitalClock