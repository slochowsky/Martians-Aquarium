// import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"
import { mostHolyFish } from "./FishDataProvider.js"

/**
 *  FishList which renders individual fish objects as HTML
 */
const FishList = () => {

const contentTarget = document.querySelector(".fishList")
// const fishObjectsArray = useFish()
const filteredFishArray = mostHolyFish()

// for (const fishObject of fishObjectsArray) {
//     contentTarget.innerHTML += Fish(fishObject)
// }
for (const filteredFishObject of filteredFishArray) {
    contentTarget.innerHTML += Fish(filteredFishObject)
}
}
export default FishList

