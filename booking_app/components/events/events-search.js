import { useRef } from "react";

import Button from "../ui/button";
import classes from './events-search.module.css'; 

function EventsSearch(props){
    const yearInputRef = useRef(); 
    const monthInputRef = useRef(); 

    function submitHandler(event){
        event.preventDefault(); 
        
        const seletectedYear = yearInputRef.current.value; 
        const selectedMonth = monthInputRef.current.value; 

        props.onSearch(seletectedYear, selectedMonth);
    }

    return(
        <form 
            className={classes.form}
            onSubmit={submitHandler}
        >
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label>Year</label>
                    <select id="year" ref={yearInputRef}>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label>Month</label>
                    <select id="month" ref={monthInputRef}>
                        <option value='January'>January</option>
                        <option value='February'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch;