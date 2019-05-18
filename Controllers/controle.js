var fs = require('fs');

module.exports.getData = (req, res) => {
    var content = fs.readFileSync("./Models/data.json", "utf8");
        res.setHeader('Content-Type', 'text/plain');
        res.write(content);
        res.end();
};

module.exports.postData = (req, res) => {        
    var lecture = fs.readFileSync('./Models/data.json', 'utf8');
        var convert;
        convert = JSON.parse(lecture);
        convert.push({"id":req.body.id, "email":req.body.email, "prenom":req.body.prenom});
        fs.writeFileSync('./Models/data.json', JSON.stringify(convert));
         res.end();
  }

module.exports.deleteData = (req, res) => {
    var lecture = fs.readFileSync('./Models/data.json', 'utf8');
    var convert = JSON.parse(lecture);
    for( let i=0; i<convert.length; i++){
        if(convert[i].id==req.body.id){
             convert.splice(i,1);
        }
   }
   console.log("Delete OK");
   fs.writeFileSync('./Models/data.json', JSON.stringify(convert));
}
  
