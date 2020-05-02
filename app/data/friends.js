// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
      name: "Mike",
      photo: "https://picsum.photos/200",
      score: [1,2,3,4,5,1,2,3,4,5]
    },
    {
      name: "John",
      photo: "https://picsum.photos/200",
      score: [5,2,3,4,5,2,3,3,4,5]
    },
    {
      name: "Matt",
      photo: "https://picsum.photos/200",
      score: [4,2,5,2,2,1,3,3,2,5]
    },
    {
      name: "Howard",
      photo: "https://picsum.photos/200",
      score: [1,4,4,4,5,5,5,5,1,5]
    }
    ];

  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsData;