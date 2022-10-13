import * as React from 'react';
import './App.css'
import Header from './Header';
import Outfits from './Outfits';
import Footer from './Footer';
import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GroupedWeakDays from './GroupedWeakDays';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {

    const [selectedWeakDay, setWeakDay] = useState(JSON.parse(localStorage.getItem('selectedWeakDay')) || "Tuesday");

    const [outfits, setOutfits] = useState(JSON.parse(localStorage.getItem('outfitList')) ||[
        {
            id: 1,
            fullName: "Black dress",
            designation: "Short sleeves",
            typeOutfit: "dressMonday",
            weakDay: "Monday"
        },
        {
            id: 2,
            fullName: "Sandals",
            designation: "Flat shoes",
            typeOutfit: "sandalsMonday",
            weakDay: "Monday"
        },
        {
            id: 3,
            fullName: "Black tote",
            designation: "A short handle-chain",
            typeOutfit: "toteMonday",
            weakDay: "Monday"
        },
        {
            id: 4,
            fullName: "Gold ring",
            designation: "Ring",
            typeOutfit: "ringMonday",
            weakDay: "Monday"
        },
        {
            id: 5,
            fullName: "Black dress",
            designation: "Short sleeves",
            typeOutfit: "dressTuesday",
            weakDay: "Tuesday"
        },
        {
            id: 6,
            fullName: "Black shoes",
            designation: "High heels",
            typeOutfit: "sandalsTuesday",
            weakDay: "Tuesday"
        },
        {
            id: 7,
            fullName: "Black small bag",
            designation: "Pouch",
            typeOutfit: "toteTuesday",
            weakDay: "Tuesday"
        },
        {
            id: 8,
            fullName: "Silver ring",
            designation: "Ring",
            typeOutfit: "ringTuesday",
            weakDay: "Tuesday"
        },
        {
            id: 9,
            fullName: "Black dress",
            designation: "Short sleeves",
            typeOutfit: "dressWednesday",
            weakDay: "Wednesday"
        },
        {
            id: 10,
            fullName: "Black shoes",
            designation: "Open high heels",
            typeOutfit: "sandalsWednesday",
            weakDay: "Wednesday"
        },
        {
            id: 11,
            fullName: "Black tote",
            designation: "A short handle-chain",
            typeOutfit: "toteWednesday",
            weakDay: "Wednesday"
        },
        {
            id: 12,
            fullName: "Gold chain",
            designation: "Ring",
            typeOutfit: "ringWednesday",
            weakDay: "Wednesday"
        },
        {
            id: 13,
            fullName: "Black dress",
            designation: "Long sleeves",
            typeOutfit: "dressFriday",
            weakDay: "Friday"
        },
        {
            id: 14,
            fullName: "Red shoes",
            designation: "Open high heels",
            typeOutfit: "sandalsFriday",
            weakDay: "Friday"
        },
        {
            id: 15,
            fullName: "Black mini bag",
            designation: "Short strap",
            typeOutfit: "toteFriday",
            weakDay: "Friday"
        },
        {
            id: 16,
            fullName: "Gold ring",
            designation: "Ring",
            typeOutfit: "ringFriday",
            weakDay: "Friday"
        }]
    );

    useEffect(() => {

        localStorage.setItem('outfitList', JSON.stringify(outfits));

    }, [outfits]);

    useEffect(() => {

        localStorage.setItem('selectedWeakDay', JSON.stringify(selectedWeakDay));

    }, [selectedWeakDay]);

    function handleWeakDaySelectionChange(event) {
        console.log(event.target.value);
        setWeakDay(event.target.value);
    }

    function handleOutfitCardClick(event) {
        console.log(event.currentTarget.id);
        const transformedOutfits = outfits.map((outfit) => outfit.id === parseInt(event.currentTarget.id)
            ?(outfit.weakDay === selectedWeakDay)
                ?{...outfit, weakDay:''}:{...outfit, weakDay: selectedWeakDay}
            :outfit);

        setOutfits(transformedOutfits);
    }

    return (

        <Router>
            <Nav />
            <Header selectedWeakDay={selectedWeakDay}
                    weakDayCount={outfits.filter((outfit) => outfit.weakDay === selectedWeakDay).length}
            />
            <Routes>
                <Route path = "/"
                       element = {<Outfits outfits = {outfits}
                                           selectedWeakDay = {selectedWeakDay}
                                           handleOutfitCardClick = {handleOutfitCardClick}
                                           handleWeakDaySelectionChange = {handleWeakDaySelectionChange}
                       />}
                >
                </Route>
                <Route path = "/GroupedOutfits" element = {<GroupedWeakDays outfits={outfits}
                                                                            selectedWeakDay = {selectedWeakDay}
                                                                            setWeakDay = {setWeakDay} />}>
                </Route>
                <Route path = "*" element = {<NotFound />}>
                </Route>
            </Routes>
            <Footer />
        </Router>


    );
}

export default App
