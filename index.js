function distanceFromHqInBlocks(a) {
    let b = 42;
    if (a > 42) {
        return a - b;
    }   else {
        return b - a;
    }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(c) {
    let b = 42;
    if (c > 42) {
        return (c-b)*264
    }   else {
        return (b-c)*264
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start-destination)*264
    }   else {
        return (destination-start)*264
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    console.log(distance);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (0.02 * (distance - 400));
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}