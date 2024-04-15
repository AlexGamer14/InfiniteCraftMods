let infCraftData = localStorage.getItem("infinite-craft-data")
let localStorageData = '{"text":"Earth","emoji":"🌍", "discovered":true},'

infCraftData=infCraftData.split(",")

for (let i = 0; i<infCraftData.length-1; i++) {
    infCraftData[i]+=","
}

for (let i = 0; i < 10000; i++) {
    infCraftData[infCraftData.length-5]+='{"text":"'+i+'","emoji":"🌍", "discovered":true},'
}

let localStorageInfCraftData = ""

for (let i = 0; i<infCraftData.length; i++) {
    localStorageInfCraftData+=infCraftData[i]
}

localStorage.setItem("infinite-craft-data",localStorageInfCraftData)