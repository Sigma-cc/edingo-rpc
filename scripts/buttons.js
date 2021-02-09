function add_button(){
    if ($('#buttons').children('div').length + 1 < 3){
      $("#buttons").append(`        <div id = "button" class = "discord">
    <label>Label:</label>
    <input placeholder="Text"><br>
    <label>Link:</label>
    <input placeholder="Link"><br>
    <button type="button" class="btn btn-outline-danger my-0 my-sm-0" onclick="remove_button(this)" id = "rpc-button">Remove</button><br>
  </div>
  `);}
  else{
    alert('You can install no more than 2 buttons.')
  }

}

function remove_button(btn){
    $(btn).parent().remove();
}
function openGit(){
  var shell = require('electron').shell;
  shell.openExternal('https://github.com/Jansy-cc/edingo-rpc/');
}
