import React from "react";

function Content() {
    const handleClick = (e) => {
        e.target.classList.toggle('checked');
    };
    return (
        <div class = "ccontainer">
            <div class ="first"> 
                <button name="cbutton" onClick={handleClick}></button>
                WebApp Todo List
            </div>
            <div class ="second"> 
                <button name="cbutton" onClick={handleClick}></button>
                OS Video 
            </div>
        </div>
    )
}

export default Content;