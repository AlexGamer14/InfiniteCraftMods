let saveData = localStorage.getItem("infinite-craft-data")

saveData=saveData.replaceAll("false","true")

localStorage.setItem("infinite-craft-data", saveData)
