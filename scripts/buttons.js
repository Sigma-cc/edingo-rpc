function add_button(){
    $("#buttons").append(`        <div id = "button">
    <label>Label:</label>
    <input placeholder="Text"><br>
    <label>Link:</label>
    <input placeholder="Link"><br>
    <button type="button" class="btn btn-outline-danger my-0 my-sm-0" onclick="remove_button(this)" id = "rpc-button">Remove</button><br>
  </div>
  `);
}

function remove_button(btn){
    $(btn).parent().remove();
}