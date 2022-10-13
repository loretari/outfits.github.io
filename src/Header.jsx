import React from "react";


const Header = ({selectedWeakDay, weakDayCount}) => {

    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Weak Day</h1>
                    <h3>{selectedWeakDay} has {weakDayCount} {weakDayCount === 1 ? "outfit" : "outfits"}</h3>
                </div>
            </div>

        </header>
    );

}
export default Header;