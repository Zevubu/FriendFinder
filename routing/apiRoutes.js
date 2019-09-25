const surveyData = require("../app/data/friends");



module.exports = function(app){
    app.get("/api/tables", function(req,res){
        res.json(surveyData);
    });

    // posts all friends
    app.post("/api/friends", function(req,res){
        console.log(req.body);
        console.log(`survey data: ${surveyData}`); 
        let newFriend = req.body;
        let bestFriend = 0;
        let minimumDiff = 25;
        let userScore = req.body.scores;
        console.log(`user score: ${userScore}`)

        for(let i = 0; i< surveyData.length; i++){
            let currentFriend = surveyData[i];
            let friendsScore = currentFriend.scores;
            console.log(`friend score:${friendsScore}`);
            let totalDifference = 0;
           
            for(let j = 0; j < 5; j++){
                // console.log("comp check")
                let userNum =  parseInt(userScore[j])
                // console.log(`user num: ${userNum}`)
                // console.log(`friend num: ${friendsScore[j]}`)
               let difference = Math.abs(userNum - friendsScore[j])
               totalDifference += difference;
            //    console.log(`diference:${difference}`);
            }
            console.log(`total:${totalDifference}`);
            if(totalDifference < minimumDiff){
                bestFriend = i;
                minimumDiff = totalDifference;
            }
        }
        console.log(`You best friend is ${JSON.stringify(surveyData[bestFriend])}`)
       surveyData.push(req.body);

       res.json(surveyData[bestFriend]);


    });

    // app.post("/api/browse", function(req,res){
    //     surveyData.push(req.body);
    // });

};