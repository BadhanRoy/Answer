// ------------------------------------Question1----------------------------------------

function describeValue(value) {
    let type = typeof value;

    let truthiness;
    if (value) {
        truthiness = "truthy";
    } else {
        truthiness = "falsy";
    }

    return type + " | " + truthiness;
}

// console.log(describeValue("hello"));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(0));
// console.log(describeValue(true));
console.log(describeValue(null));
// console.log(describeValue(undefined));
// console.log(describeValue("0"));
// console.log(describeValue(NaN));

// ------------------------------------Question2----------------------------------------

function getDayType(day) {
    let dayLower = day.toLowerCase();


    switch (dayLower) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday"));
// console.log(getDayType("friday"));
// console.log(getDayType("FRIDAY"));
// console.log(getDayType("Saturday"));
// console.log(getDayType("SATURDAY"));
// console.log(getDayType("Sunday"));
// console.log(getDayType("Monday"));
// console.log(getDayType("tuesday"));
// console.log(getDayType("WEDNESDAY"));
// console.log(getDayType("thursday"));
// console.log(getDayType("Bandarban"));
// console.log(getDayType("hello"));
// console.log(getDayType("123"));         


// ------------------------------------Question3----------------------------------------

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

// console.log(validateUsername("rahim123"));
// console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
// console.log(validateUsername("abcd"));
// console.log(validateUsername("rahim islam"));
// console.log(validateUsername("superadmin99"));
// console.log(validateUsername("Admin_Rahim"));
// console.log(validateUsername("admin"));
// console.log(validateUsername("ADMIN"));
// console.log(validateUsername("a d m i n"));

// ------------------------------------Question4----------------------------------------
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        let extraKm = distance - 2;
        fare = fare + (extraKm * 15);
    }

    fare = fare + (waitingMinutes * 2);

    if (isNight === true) {
        fare = fare + (fare * 0.20);
    }

    return fare;
}

// console.log(getCngFare(2));
// console.log(getCngFare(1));
// console.log(getCngFare(5));
// console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
// console.log(getCngFare(5, true));
// console.log(getCngFare(5, true, 10));   

// ------------------------------------Question5----------------------------------------

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    
    if (runsNeeded <= 0) {
        return "Won";
    }
    
    if (ballsLeft <= 0) {
        return "Lost";
    }
    
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;
    
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}

// console.log(getChaseVerdict(200, 200, 12)); 
// console.log(getChaseVerdict(200, 190, 0));   
console.log(getChaseVerdict(100, 90, 12));   
// console.log(getChaseVerdict(100, 80, 12));   
// console.log(getChaseVerdict(100, 70, 12));  
// console.log(getChaseVerdict(150, 149, 1));  
// console.log(getChaseVerdict(150, 140, 10));  
// console.log(getChaseVerdict(150, 135, 10));  
// console.log(getChaseVerdict(150, 125, 10));  