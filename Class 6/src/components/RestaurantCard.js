import { IMG_CDN_LINK } from "../constants";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    totalRatingsString,
    cuisines
})=>{
    return (
        <div className="w-[200px] p-2 m-2 border shadow-md">
            <img src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h2>{totalRatingsString}</h2>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    )
}

export default RestaurantCard;