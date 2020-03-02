import { useLocation } from "./LocationDataProvider.js";
import LocationComponent from "./Location.js";


const LocationListComponent = () => {

    const contentElement = document.querySelector(".locations")
    const locations = useLocation()


    for (const location of locations) {
        contentElement.innerHTML += LocationComponent(location)
}
}

export default LocationListComponent