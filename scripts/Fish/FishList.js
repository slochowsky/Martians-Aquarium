import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */
const contentTarget = document.querySelector(".fishList")

const FishList = () => {

let fishObjectsArray = useFish()


fishObjectsArray = mostHolyFish()

for (const fishObject of fishObjectsArray) {
    const fishHTMLRep = Fish(fishObject)
    contentTarget.innerHTML += fishHTMLRep
}

fishObjectsArray = soldierFish()

for (const fishObject of fishObjectsArray) {
    const fishHTMLRep = Fish(fishObject)
    contentTarget.innerHTML += fishHTMLRep
}

fishObjectsArray = nonHolyFish()

for (const fishObject of fishObjectsArray) {
    const fishHTMLRep = Fish(fishObject)
    contentTarget.innerHTML += fishHTMLRep
}


    
}
export default FishList

