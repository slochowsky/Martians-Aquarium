const tipCollection = [
    {
        tipTitle: "Hydration",
        tipText: "Make sure you always keep them in water!",
    },
    {
        tipTitle: "Hydration",
        tipText: "Make sure you always keep them in water!",
    },
    {
        tipTitle: "Food n' Stuff",
        tipText: "Make sure you feed the right fish the proper food",
    },
    {
        tipTitle: "Cleaning",
        tipText: "Clean your tank every two weeks.",
    }

]

export const useTip = () => {
    return tipCollection.slice()
}