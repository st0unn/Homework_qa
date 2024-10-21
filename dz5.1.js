let laptop = {
    vendor: "MSI",
    screen: "15.6",
    CPU: "Intel_core_i7",
    videoCard: "nVidia_RTX4060",
}

function getInfo(obj){
    for (let key in obj){
        console.log(key + ': ' + laptop[key])
    }
}

getInfo(laptop);
laptop.RAM = "16gb";
console.log('--------------------------------------------------------');
getInfo(laptop);


