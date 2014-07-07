/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  document.getElementById('submit_button').onclick = function() {

//take a photo using $fh.cam and then upload it to a server
$fh.cam({
  act: "picture",
  uri: true
}, function(data) {
  if (data.uri) {
    console.log('Filepath is ' + data.uri);
    displayAlert(data.uri);

    var req = { 
    functionName: 'uploadDoc', 
    functionArguments: 'these are arguements', 
    fun: 'lalala' 
    };

    //par = {par1: "parameter 1"};

    $fh.file({
      act: "upload",
      filepath: data.uri,
      server: "https://support-mwxwdeuuntslpek4anbyzvf8-live.df.live.e111.feedhenry.net/cloud/myServerFunction",
      params: req
    }, function(res) {
      console.log("File uploaded");
    }, function(err) {
      console.log("Failed to upload file. Error : " + err);
    });

  }
})

displayAlert = function(message) {
  alert(message);
}
};
});