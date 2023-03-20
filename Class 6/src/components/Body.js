import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useRestaurantFilter } from "../utils/useRestaurantMenu";
import useIsOnline from "../utils/useIsOnline";

const Body = ()=>{
    const ifOnline = useIsOnline();
    const [filteredRestaurants, searchInput, setSearchInput] = useRestaurantFilter();
    if(!ifOnline)return <h1>Offline</h1>;
    if(!filteredRestaurants)return <Shimmer/>;
    return (
        <>
            <div className="search-container">
                <input 
                    type = "text" 
                    className="search-input" 
                    placeholder = "search" 
                    value={searchInput}
                    onChange = {(e)=>{
                        setSearchInput(e.target.value);
                    }
                }
            />
                <button >Search</button>
            </div>
            {filteredRestaurants.length === 0 ? (
                <h2>NO SUCH RESTAURANTS</h2>
            ) : (
                <div className="flex flex-wrap">
                    {filteredRestaurants.map((restaurant) => (
                        <Link className="links" to = {"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}



export default Body;