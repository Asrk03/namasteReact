import { useEffect, useState } from "react";
import { MENU_URL, WEB_LISTING_URL } from "../constants";
import { filterData } from "./Helper.js";

const useRestaurantMenu = (restaurantId)=>{
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(()=>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data = await fetch( MENU_URL + restaurantId)
        const json = await data.json();
        setRestaurantMenu(json.data);
    }
    return restaurantMenu;
}

export const useRestaurantWebListing = () => {
    const [restaurants, setRestaurants] = useState(null);
    
    useEffect(() => {
        async function getRestaurants() {
            const data = await fetch(WEB_LISTING_URL);
            const real = await data.json();
            setRestaurants(real?.data?.cards[2]?.data?.data?.cards);
        }
        getRestaurants();
    }, []);
    
    return restaurants;
  };
    
export const useRestaurantFilter = () => {
    const restaurants = useRestaurantWebListing();
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    
    useEffect(() => {
        if (restaurants) {
            setFilteredRestaurants(restaurants);
        }
    }, [restaurants]);
    
    useEffect(() => {
        if (restaurants) {
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
        }
    }, [searchInput, restaurants]);
    
    return [filteredRestaurants, searchInput, setSearchInput];
};


export default useRestaurantMenu;