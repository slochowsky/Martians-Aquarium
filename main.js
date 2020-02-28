import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './scripts/Fish/FishDataProvider.js'
import FishList from './scripts/Fish/FishList.js'
import tipListComponent from './scripts/Tips/TipList.js'

FishList()
initializeDetailButtonEvents()
tipListComponent()

const arrayOfTheFishObjects = useFish()
console.log("all of the fish:", arrayOfTheFishObjects)

// for (const currentFishObject of arrayOfTheFishObjects) (
//     console.log(currentFishObject)
//     )