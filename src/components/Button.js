import React from "react";

function Button({children, type}){
    return (
        <button 
            class = "button" 
            //If not submit, then return button
            type={type === 'submit' ? 'submit' : 'button'}    
        >
        {children}
        </button>
    )
    
}

function FilterButton({children}){
    return(
        <select class = "filterbutton">
            {children}
        </select>
    );
}

export {FilterButton};
export default Button;