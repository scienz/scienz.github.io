function loadPage(content_url) {
    if (content_url) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200)
            {
                document.getElementsByClassName("main-text")[0].innerHTML = this.responseText;
            }
        };

        xhttp.open("GET", content_url, true);
        xhttp.send();
    }
}
