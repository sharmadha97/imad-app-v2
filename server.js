var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'article one sharmadha',
    heading: 'article one',
    date:'sept 4',
    content:
    `    <p>
                    this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle
                    
                </p>
                <p>
                    this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle
                    
                </p>
                <p>
                    this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle this is mycontent for my artcle
                    
                </p>`

};
function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`<html>
    <head>
        <title>${title}</title>
          <link href="/ui/style.css" rel="stylesheet" >
    </head>
    <body>
     <div class="container">
            <h3>
                ${heading}
            </h3>
            <hr/>
            <div>
                ${date}
            </div>
            <div>
           ${content}
            </div>
    </div>
    </body>
</html>`;
return htmlTemplate;
}
    




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req,res) {
    counter =counter+1;
    res.send(counter.toString());
});
app.get('/article-one',function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080 ;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});





