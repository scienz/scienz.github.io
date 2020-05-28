window.onload = function() {
    this.set_last_update();
}

function set_last_update() {
    $.getJSON("json/config.json", function(data) {
        $.each(data, function(key, val) {
            if (key == "last_updated") {
                document.getElementById("last_updated").innerHTML = "Last Updataed: " + val;
            }
        });
    });
}
