import React, {useContext} from "react";
import OutfitsOptionCard from './OutfitsOptionCard';
import DataContext from './context/DataContext';

const OutfitsOption = () => {

    const { outfits } = useContext(DataContext);

    return (
       outfits.map((outfit) => (
           <OutfitsOptionCard key = { outfit.id } outfit={outfit} />

       ))
    )


}

export default OutfitsOption;