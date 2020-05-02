

var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {


   
    for(var i = 0; i < req.body.score.length; i++) {
      req.body.score[i] = parseInt(req.body.score[i]);
    }
    console.log(req.body);
    
    res.json(friendsData);
    friendsData.push(req.body);

  });

}
