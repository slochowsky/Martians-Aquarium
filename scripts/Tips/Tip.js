const tipComponent = (tipCollection) => {
    return `
            <aside class="tipList">${tipCollection.tipTitle}</aside>
            <p>${tipCollection.tipText}</p>
    `
}

export default tipComponent