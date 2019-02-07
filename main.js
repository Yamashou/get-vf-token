var firebase = require("firebase");
var config = require("./config.json");
firebase.initializeApp(config);

if (process.argv.length < 4) {
  console.log("twitter token & twitter seacret not found");
  process.exit(1)
}  
const token = process.argv[2];
const seacret = process.argv[3];
// login指定るユーザーのトークンを使う
var credential = firebase.auth.TwitterAuthProvider.credential(token, seacret);

firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
  console.log(result.user.h.b);
});