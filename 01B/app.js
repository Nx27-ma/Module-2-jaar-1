class app {

    
    runApplication() {
        this.greeting = "Starting up"
        this.appName = "SchoolOpdracht"
        this.versionApp = 0.11
        this.versionAppDate = "Last edited: 12/09/2022 20:39 (European notation)"
        this.darkMode = true
        let propertyArray = [this.greeting, this.appName, this.versionApp, this.versionAppDate, this.  darkMode];
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