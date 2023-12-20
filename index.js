function reducer(batteryCounts) {
    // Assuming batteryCounts is an array of numbers representing the counts of batteries
    return batteryCounts.reduce((sum, count) => sum + count, 0);
  }
  
  
  const batteryCounts = [5, 8, 3, 15]; 
  const totalBatteries = reducer(batteryCounts);
  console.log(totalBatteries); // Output: 31
  