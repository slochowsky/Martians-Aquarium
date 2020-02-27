import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */
const FishList = () => {

const contentTarget = document.querySelector(".fishList")
const fishObjectsArray = useFish()

for (const fishObject of fishObjectsArray) {
contentTarget.innerHTML += Fish(fishObject)
}
}

export default FishList
// contentTarget.innerHTML += `
//         <article class="fishList">
//         ${fishObjectsArray.map((currentFish) => {
//                 return Fish(currentFish)
//             }
//             ).join("")
//         }
//         </article>
//         `

