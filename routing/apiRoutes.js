const surveyData = require("../app/data/friends");

module.exports = function(app){
    app.get("/api/tables", function(req,res){
        res.json(surveyData);
    });

    // posts all friends
    app.post("/api/browse", function(req,res){
        surveyData.push(req.body);
    });
};