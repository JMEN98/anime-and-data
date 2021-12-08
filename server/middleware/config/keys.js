let gitRepoName=require('git-repo-name')
let repoName =gitRepoName.sync("../../")
module.exports={
app:{
 name:repoName,
 apiEndppint:(process.env.API_URL)?`${process.env.API_URL}`:'/a[i'

},
database:{
url:process.env.MONGODB_URI||'mongodb://localhost:27017'+repoName
},
jwt:{
secret:process.env.JWT_SECRET||'jwt-secret',
tokenLife:'7d',
},
}