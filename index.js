// Example implementation of distanceFromHqInBlocks
function distanceFromHqInBlocks(blocks) {
  const hqBlock = 42; // Assuming HQ is at 42nd Street
  return Math.abs(blocks - hqBlock);
}

// Example implementation of distanceFromHqInFeet
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; // 1 block = 264 feet
}

// Example implementation of distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // Calculate feet based on blocks
}

// Example implementation of calculatesFarePrice
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  
  if (distanceInFeet <= 400) {
      return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after first 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fee for over 2000 feet
  } else {
      return 'cannot travel that far'; // Restriction for too far
  }
}
