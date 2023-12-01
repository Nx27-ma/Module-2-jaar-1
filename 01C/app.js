class app {

    
    runApplication() {
        this.greeting = "Starting up"
        this.appName = "SchoolOpdracht"
        this.versionApp = 0.11
        this.versionAppDate = "Last edited: 12/09/2022 20:39 (European notation)"
        this.darkMode = true
        this.isHereBecauseIHaveTo = "Bonjour opdracht C"
        this.isAlsoJustHere = 9
        this.moetHier = true
        let meDown = false
        let meHaveANumber = 0.9
        let meMakeABool = false
        
    }
    
}

function checkProperties(propertyArray) {
    for (let i = 0; i < propertyArray.length; i++) {
        console.log(propertyArray[i]);
    }
}



const appLication = new app();
appLication.runApplication();

let propertyArray = ["Class level vars:", app.greeting, app.appName, app.versionApp, app.versionAppDate, app.darkMode, app.isHereBecauseIHaveTo, app.isAlsoJustHere, app.moetHier,
    "Local vars:", meDown, meHaveANumber, meMakeABool];
console.log("Hello world")
checkProperties(propertyArray);




