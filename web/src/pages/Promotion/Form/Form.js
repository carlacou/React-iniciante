import React from "react";
import { useParams } from "react-router-dom";

const PagesPromotionForm = () => {

    const { id } = useParams()

    return (
        <div>
            FORM
            {id && <did>id: {id}</did>}
        </div>

    )
}
    
        
    


export default PagesPromotionForm;
