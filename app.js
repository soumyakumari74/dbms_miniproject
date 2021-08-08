const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');


const secret=process.env.SECRET;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: secret,
  database: "dbms1"
});


const app = express();

app.use(express.static("public"));
//app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

//
// app.get("/",function(req,res){
//   res.render("login");
// });
//
// app.get("/register",function(req,res){
//
//   res.render("register");
//
//
// });
//
// app.get("/dashboard",function(req,res){
//   res.render("dashboard");
// })
//
//
// app.post("/register",function(req,res){
//   name=req.body.name;
//   usn=req.body.usn;
//   branch=req.body.branch;
//   college_name=req.body.college_name;
//   email=req.body.email;
//   password=req.body.password;
//
//   var sql="Insert into student (name,usn,branch,college_name,email,password) VALUES ('"+name+"','"+usn+"','"+branch+"','"+college_name+"','"+email+"','"+password+"')";
//
//   con.query(sql,function(err,result){
//     if(err)
//     throw err;
//     else
//     {
//       console.log("entered successfully");
//     }
//
//
//   });
//
//   res.render("dashboard");
//
// });
//
// app.post("/",function(req,res){
//   email=req.body.email;
//   password=req.body.password;
//
//   var sql1="Select email from student";
//   var sql2="Select password from student";
//
// con.query(sql1,function(err,result){
//   if(email==result)
//   res.render("dashboard");
//   else
//   res.write("incorrect id password");
// });
//
//   res.send();
// });
//

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});

app.get("/details",function(req,res){
  res.sendFile(__dirname+"/details.html");
});

app.get("/about",function(req,res){
  res.sendFile(__dirname+"/about.html");
});

app.get("/faq",function(req,res){
  res.sendFile(__dirname+"/faqs.html");
});

app.get("/ThankYou",function(req,res){
  res.sendFile(__dirname+"/ThankYou.html");
});

app.post("/details",function(req,res){

  usn=req.body.usn;
  first_name=req.body.first_name;
  last_name=req.body.last_name;
  branch=req.body.branch;
  college=req.body.college;
  email=req.body.email;

  var sql="Insert into student(usn,first_name,last_name,branch,college,email) values('"+usn+"','"+first_name+"','"+last_name+"','"+branch+"','"+college+"','"+email+"')";

  con.query(sql,function(err,result){
     if (err)
      throw err;
    else
      {
        console.log("entered successfully");
    }

  });


  skill1=req.body.skill1;
  level1=req.body.level1;
var sql1="Insert into skill(skill_name,level,usn) values('"+skill1+"','"+level1+"','"+usn+"')";

con.query(sql1,function(err,result){
  if(err)
  throw err;
  else{
    console.log("skill1 entered successfully");
  }

});

  skill2=req.body.skill2;
  level2=req.body.level2;

  var sql2="Insert into skill(skill_name,level,usn) values('"+skill2+"','"+level2+"','"+usn+"')";

  con.query(sql2,function(err,result){
    if(err)
    throw err;
    else{
      console.log("skill2 entered successfully");
    }

  });

  skill3=req.body.skill3;
  level3=req.body.level3;

  var sql3="Insert into skill(skill_name,level,usn) values('"+skill3+"','"+level3+"','"+usn+"')";

  con.query(sql3,function(err,result){
    if(err)
    throw err;
    else{
      console.log("skill3 entered successfully");
    }

  });

  // skill4=req.body.skill4;
  // level4=req.body.level4;
  //
  // var sql4="Insert into skill(skill_name,level,usn) values('"+skill4+"','"+level4+"','"+usn+"')";
  //
  // con.query(sql4,function(err,result){
  //   if(err)
  //   throw err;
  //   else{
  //     console.log("skill4 entered successfully");
  //   }
  //
  // });
  //
  // skill5=req.body.skill5;
  // level5=req.body.level5;
  //
  // var sql5="Insert into skill(skill_name,level,usn) values('"+skill5+"','"+level5+"','"+usn+"')";
  //
  // con.query(sql5,function(err,result){
  //   if(err)
  //   throw err;
  //   else{
  //     console.log("skill5 entered successfully");
  //   }

  //});
  name1=req.body.course1;
  school1=req.body.school1;

  var sql4="Insert into course(course_name,school_name,usn) values('"+name1+"','"+school1+"','"+usn+"')";

  con.query(sql4,function(err,result){
    if(err)
    throw err;
    else
    {
      console.log("course 1 entered successfully");
    }
  });

  name2=req.body.course2;
  school2=req.body.school2;

  var sql5="Insert into course(course_name,school_name,usn) values('"+name2+"','"+school2+"','"+usn+"')";

  con.query(sql4,function(err,result){
    if(err)
    throw err;
    else
    {
      console.log("course 2 entered successfully");
    }
  });

  name3=req.body.course1;
  school3=req.body.school1;

  var sql6="Insert into course(course_name,school_name,usn) values('"+name3+"','"+school3+"','"+usn+"')";

  con.query(sql4,function(err,result){
    if(err)
    throw err;
    else
    {
      console.log("course 3 entered successfully");
    }
  });

  project1=req.body.project1;
  description1=req.body.description1;
  link1=req.body.link1;

  var sql7="Insert into project(project_name,description,project_link,usn) values('"+project1+"','"+description1+"','"+link1+"','"+usn+"')";

  con.query(sql7,function(err,result){
    if(err)
    throw err;
    else
    {
      console.log("project 1 entered successfully");
    }
  });

  project2=req.body.project2;
  description2=req.body.description2;
  link2=req.body.link2;

  var sql8="Insert into project(project_name,description,project_link,usn) values('"+project2+"','"+description2+"','"+link2+"','"+usn+"')";

  con.query(sql8,function(err,result){
    if(err)
    throw err;
    else
    {
      console.log("project 2 entered successfully");
    }
  });

  project3=req.body.project3;
  description3=req.body.description3;
  link3=req.body.link3;

  var sql9="Insert into project(project_name,description,project_link,usn) values('"+project3+"','"+description3+"','"+link3+"','"+usn+"')";

  con.query(sql9,function(err,result){
    if(err)
    throw err;
    else
    {
      console.log("project 3 entered successfully");
    }
  });


  res.redirect("/ThankYou");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
