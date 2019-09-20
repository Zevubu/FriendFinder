const path = require("path");
module.exports = function(app){
    // connect to survey
    app.get("./survey", function(req,res){
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });
    // connect to browse
    app.get("./browse", function(req,res){
        res.sendFile(path.join(__dirname, "../public/browse.html"));
    });
    // go home
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });   
};

