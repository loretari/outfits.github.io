import React from "react";
import Days from './Days';
import OutfitsOption from './OutfitsOption';



const Outfits = ({outfits, selectedWeakDay, handleWeakDaySelectionChange, handleOutfitCardClick}) => {

    return (
        <main className= "container">
            <div className= "row justify-content-center mt-3 mb-3">
                <div className= "col-6">
<Days selectedWeakDay = {selectedWeakDay}
      handleWeakDaySelectionChange = {handleWeakDaySelectionChange}/>
                </div>
            </div>
            <div className= "row justify-content-center mt-3 mb-3">
                <div className= "col-10">
                    <div className="card-collection">

<OutfitsOption outfits = {outfits}
               handleOutfitCardClick = {handleOutfitCardClick}
               selectedWeakDay = {selectedWeakDay} />

                </div>
            </div>
            </div>
        </main>
    );

}
export default Outfits;