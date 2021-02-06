const rpc = require("discord-rpc")
const rpc_client = new rpc.Client({
    transport: 'ipc'
})

const $ = require( "jquery" );
function on_update(){

    var presense = {assets : {}, timestamps : {}};

    function value_id(id){
        return `${$(`#${id}`).val().toString()}`
    }
    function value_id_valid(id){
        return (`${$(`#${id}`).val().toString()}` != '')
    }

    //How to optimize this?
    if (value_id_valid('state')){
        presense.state = value_id('state');
    };
    if (value_id_valid('details')){
        presense.details = value_id('details');
    }
    if (value_id_valid('large_image')){
        presense.assets.large_image = value_id('large_image');
    }
    if (value_id_valid('large_image_text')){
        presense.assets.large_text = value_id('large_image_text');
    }
    if (value_id_valid('smal_image')){
        presense.assets.small_image = value_id('smal_image');
    }
    if (value_id_valid('smal_image_text')){
        presense.assets.small_text = value_id('smal_image_text');
    }
    if (value_id_valid('start_time')){
        presense.timestamps.start = Number.parseInt(value_id('start_time'));
    }else{
        presense.timestamps.start = Math.round(new Date());
    }
    if (value_id_valid('end_time')){
        presense.timestamps.end = Number.parseInt(value_id('end_time'));
    }
    rpc_client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: presense
    })
}

function on_connect(){
    rpc_client.login({clientId: $('#appid').val().toString()}).then(() => {
        $("#panel :input").toArray().forEach(element => element.disabled = false)
    }).catch((error) => {
        alert(`Invalid Connection!\nReason:\n${error}`);
    });
}
