$(document).ready(function () {
    function addtolist(a) {
        //console.log("Original input: " + a);
        var clean_input = $('<div>').text(a).html();
        //console.log("Clean input: " + clean_input);
        var new_item = $("<li> <span class=\"item\">" + clean_input + "</span></li>");

        if ($.trim(a).length > 0) {
            new_item.appendTo('#list ul');
        } else {
            $('input').animate({
                'background-color': "#E56C75"
            }, 200);
            $('input').animate({
                'background-color': "#A6BBC5"
            }, 100);
        }
        $('input').val('');
    }

    var list_item = $('.item');

    $('#list').on('click', '.item', function () {

        var li = $(this).parent();
        if (li.is('.done')) {
            $(this).parent().removeClass("done").append('<button class="x">   </button>');
            li.find('button').remove();
        } else {
            $(this).parent().addClass("done").append('<button class="x">   </button>');
        }

    });

    $('#list').on('click', 'button', function () {
        $(this).parent().fadeOut();
    });

    $('#list').on('dblclick', '.item', function () {
        $(this).parent().fadeOut();
    });

    $('#input').keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#additem').click();
        };
    });
    $('#additem').click(function () {

        function splitString(stringToSplit, separator) {
            var arrayOfStrings = stringToSplit.split(separator);
            for (var i = 0; i < arrayOfStrings.length; i++) {
                // console.log(arrayOfStrings[i]);
                addtolist(arrayOfStrings[i]);
            }
        }
        var origString = $('input').val()
        var comma = /[\n,\t]/;
        splitString(origString, comma);
    });

    $('#list ul').sortable();

    $('a[href$="#"]').click(function (event) {
        event.preventDefault();
    });
    // disable help info if turned off and visited
    if ($.cookie('HelperPopup') === 'SeenIt') {
        $('#helper').hide();
        console.log("you have been here before");
    } else {
        $('#helper').on('click', 'button', function () {
            $(this).parent().fadeOut();
            $.cookie('HelperPopup', 'SeenIt');
            console.log("you are fresh");
        });
    }

})