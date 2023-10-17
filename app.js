const express = require('express');
const app = express();
// const fs = require('fs');
// const path = require('path');


// app.use(express.json());


// app.use(express.urlencoded()); //this is important when use mongoose

const port = 8000;

// For serving static files
app.use('/css', express.static('css'))
app.use('/images', express.static('images'))
app.use('/javascript', express.static('javascript'))
app.use('/pdf', express.static('pdf'))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/html/home.html');
});

// this is about section in this express js  and with the help of this we are goes in the next url page 

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + '/html/about.html');
});
app.get("/project", (req, res)=>{
    res.sendFile(__dirname + '/html/project.html');
});
app.post('/',function(req, res){ 
    console.log(req.body)   
});
// app.post('/upload', (req, res) => {
//     const videoData = req.body.videoData; // Assuming you're sending the video data in the request body
//     const filePath = path.join(__dirname, 'videos', 'video.mp4'); // Specify the desired path
  
//     fs.writeFile(filePath, videoData, 'base64', function(err) {
//       if (err) {
//         // Handle the error
//         console.error(err);
//         return res.status(500).send(err);
//       }
  
//       // File saved successfully
//       res.send('Video uploaded and saved successfully!');
//     });
//   });

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});
