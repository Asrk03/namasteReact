export function filterData(searchInput, restaurants){
    const data =  restaurants.filter((restaurant)=> restaurant.data.name.toLowerCase().trim().includes(searchInput));
    return data;
}