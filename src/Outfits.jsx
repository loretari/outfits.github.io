import React, {useContext} from "react";
import Days from './Days';
import OutfitsOption from './OutfitsOption';



const Outfits = () => {


    return (
        <main className= "container">
            <div className= "row justify-content-center mt-3 mb-3">
                <div className= "col-6">
<Days />
                </div>
            </div>
            <hr />
            <div className= "row justify-content-center mt-3 mb-3">
                <div className= "col-10">
                    <div className="card-collection">

<OutfitsOption />

                </div>
            </div>
            </div>
        </main>
    );

}
export default Outfits;