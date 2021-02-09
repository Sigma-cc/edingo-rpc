  
const rpc = require("discord-rpc")
const rpc_client = new rpc.Client({
    transport: 'ipc'
})
const $ = require( "jquery" );

function openAttachment() {
    document.getElementById('attachment').click();
}

function fileSelected(input){
    let file = input.files[0];
    let reader = new FileReader()
    reader.onload = () =>  {
        let settings = JSON.parse(reader.result);
        $('#app_id').val(settings['pid']);
        $('#details').val(settings["details"]);
        $('#state').val(settings["state"]);
        $('#start_time').val(settings["timestamps"]['start']);
        $('#end_time').val(settings["timestamps"]['end']);
        $('#large_image_asset').val(settings["assets"]['large_image']);
        $('#large_image_text').val(settings["assets"]['large_text']);
        $('#small_image_asset').val(settings["assets"]['small_image']);
        $('#small_image_text').val(settings["assets"]['small.text']);
        $('#buttons').children('div').remove();
        if (settings['buttons'] != undefined){
            settings['buttons'].forEach(button => {
                $("#buttons").append(`        <div id = "button">
                <label>Label:</label>
                <input placeholder="Text" value = "${button['label']}"><br>
                <label>Link:</label>
                <input placeholder="Link" value = "${button['url']}"><br>
                <button type="button" class="btn btn-outline-danger my-0 my-sm-0" onclick="remove_button(this)" id = "rpc-button">Remove</button><br>
              </div>
              `);
            })

        }
    }
    reader.readAsText(file);
}

function save_settings() {//https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
    var data = JSON.parse(JSON.stringify(get_presence()));
    data['pid'] = $('#app_id').val().toString();
    data = JSON.stringify(data);

    var file = new Blob([data], {type: 'application/json'});
    var filename = 'settings.json';
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function get_presence(){
    function validator(area_value){
        return `${$(`#${area_value.id}`).val().toString()}`;
    }
    function valid(area_value){
        return (`${$(`#${area_value.id}`).val().toString().replace(/\s/g, "")}` != '');
    }
    var presense = {assets : {}, timestamps : {}};


    $('#settings textarea').toArray().forEach(area => {
        if (valid(area)){
            if (area.id == 'state'){
                presense.state = validator(area);
            }else if (area.id == 'details'){
                presense.details = validator(area);
            }
            else if (area.id == 'start_time'){
                try{
                    presense.timestamps.start = Number.parseInt(validator(area));
                }catch(e){
                    presense.timestamps.start = Math.round(new Date());
                }
            }
            else if (area.id == 'end_time'){
                try{
                    let time = Number.parseInt(validator(area));
                    presense.timestamps.end = time;
                }catch(e){}
            }
            else if (area.id == 'large_image_asset'){
                presense.assets.large_image = validator(area);
            }
            else if (area.id == 'large_image_text'){
                presense.assets.large_text = validator(area);
            }
            else if (area.id == 'small_image_asset'){
                presense.assets.small_image = validator(area);
            }
            else if (area.id == 'small_image_text'){
                presense.assets.small_text = validator(area);
            }
        }
    })
    if ($("#buttons").children("div").toArray().length > 0){
        presense.buttons = [];
        $("#buttons").children("div").toArray().forEach(element => {
            var btn_label = element.children.item(1).value.toString();
            var btn_link = element.children.item(4).value.toString();
            if (btn_label != '' && btn_link != ''){
                presense.buttons.push({label: btn_label, url: btn_link});
            }
        })
        if (presense.buttons.length == 0){
            delete presense.buttons;
        }
    };

    return presense;
}

function set_presense(){
    console.log(JSON.stringify(get_presence()));
    rpc_client.on('ready', () => {
        rpc_client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: get_presence()
        })
        .then(() =>{
            $("#upload1").append('<button class = "upload" onclick="openAssets()">(Click For Upload)</button>')
            $("#upload2").append('<button class = "upload" onclick="openAssets()">(Click For Upload)</button>')
        })
        .catch((error) => {
            alert(`Invalid Update!\nReason:\n${error}`);
        });

    })
    rpc_client.login({clientId: $('#app_id').val().toString()})
    .catch((error) => {
        alert(`Invalid Update!\nReason:\n${error}`);
    });
}
