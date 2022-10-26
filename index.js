// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    

    if (distance > 42) {
        return distance - 42
    } else {
        return 42 - distance;
      }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;

}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    }else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination){
    const tDistance = distanceTravelledInFeet(start, destination);
    if (tDistance <= 400){
        return 0
    }else if(tDistance > 400 && tDistance <= 2000) {
    return (tDistance - 400) * .02 
    }else if (tDistance > 2000 && tDistance < 2500) {
        return 25;
      } else {
        return 'cannot travel that far';
      }
}