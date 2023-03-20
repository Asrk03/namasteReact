import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";
import { IMG_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = ()=>{
    const {restaurantId} = useParams();
    
    const restaurantMenu = useRestaurantMenu(restaurantId);

    return (!restaurantMenu)? (
            <Shimmer/>
        ):(
            <>
            <div className = "menu">
                <img src = {IMG_CDN_LINK + restaurantMenu.cloudinaryImageId}/>
                <h2>MENU</h2>
                <ul>
                    {Object.values(restaurantMenu?.menu?.items).map((item)=><li key = {item.id}>{item.name}</li>)}
                </ul>
            </div>
            </>
    )
}

export default RestaurantMenu;