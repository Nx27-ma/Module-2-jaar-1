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
        let propertyArray = ["Class level vars:", this.greeting, this.appName, this.versionApp, this.versionAppDate, this.darkMode, this.isHereBecauseIHaveTo, this.isAlsoJustHere, this.moetHier,
            "Local vars:", meDown, meHaveANumber, meMakeABool];
        console.log("Hello world")
        checkProperties(propertyArray);
    }
    
}

function checkProperties(propertyArray) {
    for (let i = 0; i < propertyArray.length; i++) {
        console.log(propertyArray[i]);
    }
}

const appLication = new app();
appLication.runApplication();