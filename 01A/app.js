class app {

    
    runApplication() {
        let appName = "SchoolOpdracht"
        let versionApp = 0.11
        let versionAppDate = "Last edited: 12/09/2022 20:39 (European notation)"
        let darkMode = true
        let propertyArray = [appName, versionApp, versionAppDate, darkMode];
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