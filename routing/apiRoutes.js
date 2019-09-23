const surveyData = require("../app/data/friends");



module.exports = function(app){
    app.get("/api/tables", function(req,res){
        res.json(surveyData);
    });

    // posts all friends
    app.post("/api/friends", function(req,res){
        console.log(req.body);
        surveyData.push(req.body);
        console.log(surveyData); 
        let userScore = req.body.scores;
        let scoreComp = []
        console.log(`user score: ${userScore}`)
        for(let i = 0; i< surveyData.length; i++){
            let currentFriend = surveyData[i];
            let friendsScore = currentFriend.scores;
            let totalDifference = 0;
           
            for(let j = 0; j < friendsScore.length; i++){
               let difference = Math.abs(userScore[i] - friendsScore[j])
               console
            }
            
        }
       


    });

    app.post("/api/browse", function(req,res){
        surveyData.push(req.body);
    });

};