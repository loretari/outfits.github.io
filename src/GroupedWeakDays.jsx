import React from "react";
import {useState} from 'react';


const GroupedWeakDays = ({outfits, selectedWeakDay, setWeakDay}) => {

    const [groupedOutfits, setGroupedData] = useState(groupWeakDaysOutfits);

    function groupWeakDaysOutfits()

    {
        var days = [];

        var mondayOutfit = outfits.filter((outfit) => outfit.weakDay === 'Monday');
        var monday = {day: 'Monday', options: mondayOutfit, collapsed: selectedWeakDay === 'Monday' ? false:true};
        days.push(monday);

        var tuesdayOutfit = outfits.filter((outfit) => outfit.weakDay ==='Tuesday');
        var tuesday = {day: 'Tuesday', options: tuesdayOutfit, collapsed: selectedWeakDay === 'Tuesday' ? false:true};
        days.push(tuesday);

        var wednesdayOutfit = outfits.filter((outfit) => outfit.weakDay ==='Wednesday');
        var wednesday = {day: 'Wednesday', options: wednesdayOutfit, collapsed: selectedWeakDay === 'Wednesday' ? false:true};
        days.push(wednesday);

        var fridayOutfit = outfits.filter((outfit) => outfit.weakDay ==='Friday');
        var friday = {day: 'Friday', options: fridayOutfit, collapsed: selectedWeakDay === 'Friday' ? false:true};
        days.push(friday);
console.log(days);
        return days;
    }
    
    function handleDayClick(event) {
        var newOutfitData = groupedOutfits.map((groupedData) => groupedData.day === event.currentTarget.id
            ? {...groupedData, collapsed: !groupedData.collapsed }
            : groupedData);
        console.log(newOutfitData);
        setGroupedData(newOutfitData);
        setWeakDay(event.currentTarget.id);

    }
    
    return (
        <main className="container">
            {
                groupedOutfits.map((item) => {
                    return (
                        <div key={item.day} className = "card mt-2" style={{cursor: "pointer"}}>
                            <h4 id={item.day} className = "card-header text-secondary bg-white" onClick = {handleDayClick}>
                                Weak Day: {item.day}
                            </h4>
                            <div id={"collapse_" + item.day}
                            className = {item.collapsed === true ? "collapse" : ""}>
                                <hr/>

                                {
                                    item.options.map((option) => {
                                        return (
                                            <div key={option.id} className = "mt-2">
                                                <h5 className = "card-title mt-2">
                                                    <span className = "text-dark"><b>Full Name:</b> {option.fullName}</span>
                                                </h5>
                                                <p className = "card-text text-dark mt-2"><b>Designation: </b> {option.designation}</p>
                                            </div>

                                        )
                                    })
                                }

                            </div>


                        </div>
                    )
                })
            }
        </main>
    );

}
export default GroupedWeakDays;