import React from "react";
import blackDressMonday from "./images/blackDressMonday.jpg";
import leatherSandalsMonday from "./images/leatherSandalsMonday.jpg";
import smallLeatherTote from "./images/smallLeatherTote.jpg";
import goldPlatedRing from "./images/goldPlatedRing.jpg";
import blackDressTuesday from "./images/blackDressTuesday.jpg";
import leatherPumps from "./images/leatherPumps.jpg";
import leatherClutch from "./images/letherClutch.jpg";
import silverRing from "./images/silverRing.jpg";
import cottonMidiDress from "./images/cottonMidiDress.jpg";
import luzLeatherPumps from "./images/luzLeatherPumps.jpg";
import leatherShoulder from "./images/leatherShoulder.jpg";
import topazDiamondRing from "./images/topazDiamondRing.jpg";
import midiDress from "./images/midiDress.jpg";
import platformPumps from "./images/platformPumps.jpg";
import shoulderBag from "./images/shoulderBag.jpg";
import goldRing from "./images/goldRing.jpg";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const OutfitsOptionCard = ({ outfit }) => {
    const { handleOutfitCardClick, selectedWeakDay } = useContext(DataContext);
    return (

        <div key={outfit.id} id={outfit.id} className={(outfit.weakDay === selectedWeakDay ? "card m-2 standout" : "card m-2")} style={{cursor:"pointer"}} onClick={handleOutfitCardClick}>
            {(outfit.typeOutfit === 'dressMonday') ? <img src={blackDressMonday} className="card-img-top"/>
                : (outfit.typeOutfit === 'sandalsMonday') ? <img src={leatherSandalsMonday} className="card-img-top"/>
                    : (outfit.typeOutfit === 'toteMonday') ? <img src={smallLeatherTote} className="card-img-top"/>
                        : (outfit.typeOutfit === 'ringMonday') ? <img src={goldPlatedRing} className="card-img-top"/>
                            : (outfit.typeOutfit === 'dressTuesday') ? <img src={blackDressTuesday} className="card-img-top"/>
                                : (outfit.typeOutfit === 'sandalsTuesday') ? <img src={leatherPumps} className="card-img-top"/>
                                    : (outfit.typeOutfit === 'toteTuesday') ? <img src={leatherClutch} className="card-img-top"/>
                                        : (outfit.typeOutfit === 'ringTuesday') ? <img src={silverRing} className="card-img-top"/>
                                            : (outfit.typeOutfit === 'dressWednesday') ? <img src={cottonMidiDress} className="card-img-top"/>
                                                : (outfit.typeOutfit === 'sandalsWednesday') ? <img src={luzLeatherPumps} className="card-img-top"/>
                                                    : (outfit.typeOutfit === 'toteWednesday') ? <img src={leatherShoulder} className="card-img-top"/>
                                                        : (outfit.typeOutfit === 'ringWednesday') ? <img src={topazDiamondRing} className="card-img-top"/>
                                                            : (outfit.typeOutfit === 'dressFriday') ? <img src={midiDress} className="card-img-top"/>
                                                                : (outfit.typeOutfit === 'sandalsFriday') ? <img src={platformPumps} className="card-img-top"/>
                                                                    : (outfit.typeOutfit === 'toteFriday') ? <img src={shoulderBag} className="card-img-top"/>

                                                                        :<img src={goldRing} className="card-img-top"/>}

            <div className="card-body">
                <h5 className="card-title">Full Name: {outfit.fullName}</h5>
                <p className="card-text"><b>Designation: </b>{ outfit.designation}</p>
            </div>
        </div>
    )


}

export default OutfitsOptionCard;