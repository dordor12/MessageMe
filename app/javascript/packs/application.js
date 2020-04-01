// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("semantic-ui-sass")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
scroll_bottom = () => {
    if ($('#messages').length > 0){
        $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }
};

submit_message = () => {
    $('#messages').on('keydown',(e) => {
        if (e.keyCode == 13){ //enter
            $('button').click();
        }
    });
};

$(document).on('turbolinks:load', () => {
    $('.ui.dropdown').dropdown();
    $('.message .close').click(() => {
        $('.message').transition('fade');
    });
    scroll_bottom();
    submit_message();
});