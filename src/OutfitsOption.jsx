import React from "react";
import OutfitsOptionCard from './OutfitsOptionCard';

const OutfitsOption = ({outfits, selectedWeakDay, handleOutfitCardClick}) => {
    return (
       outfits.map((outfit) => (
           <OutfitsOptionCard outfit={outfit}
               handleOutfitCardClick = {handleOutfitCardClick}
                              selectedWeakDay = {selectedWeakDay} />
       ))
    )


}

export default OutfitsOption;