import * as React from 'react';
import './App.css'
import Header from './Header';
import Outfits from './Outfits';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GroupedWeakDays from './GroupedWeakDays';
import Nav from './Nav';
import NotFound from './NotFound';
import { DataProvider } from './context/DataContext';

function App() {


    return (

        <DataProvider>
            <Router>
                <Nav/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Outfits/>}>
                    </Route>
                    <Route path="/GroupedOutfits" element={<GroupedWeakDays/>}>
                    </Route>
                    <Route path="*" element={<NotFound/>}>
                    </Route>
                </Routes>
                <Footer/>
            </Router>
        </DataProvider>


    );
}

export default App;
