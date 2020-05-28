var r_innerHTML = "";
var r_height = 0;
var r_width = 0;
var r_object = null;

function changeLayout(caller, class_name) {
    var header = document.getElementsByClassName("header")[0];
    var header_text = document.getElementsByClassName("header-text")[0];
    var github_icon = document.getElementsByClassName("fa-github")[0];
    var button_container = document.getElementsByClassName("button-container")[0];
    var sidebar = document.getElementsByClassName("sidebar")[0];

    var sidebar_children = sidebar.children;
    for (var i = 0; i < sidebar_children.length; i++) {
        if (sidebar_children[i]) {
            sidebar_children[i].style.display = "none";
        }
    }

    header.style.height = "8%";
    header_text.style.top = "4%";
    header_text.style.fontSize = "1.5em";
    github_icon.style.fontSize = "0.9em";

    var buttons = document.getElementsByClassName("buttons");
    for (var i = 0; i < buttons.length; i++) {
        if (!(buttons[i] === caller)) {
            buttons[i].style.display = "none";
        }
    }

    var bot = document.getElementsByClassName("bottom-line");
    for (var i = 0; i < bot.length; i++) {
        bot[i].style.display = "none";
    }

    r_innerHTML = caller.innerHTML;
    r_height = caller.style.height;
    r_width = caller.style.width;
    r_object = caller;
    
    caller.innerHTML = "";
    caller.style.marginTop = "10px";
    caller.style.height = "100%";
    button_container.style.height = caller.style.height;
    caller.style.width = "100%";
    
    var targeting_menu_list = document.getElementsByClassName(class_name)[0];
    if (targeting_menu_list) {
        targeting_menu_list.style.display = "flex";

        switch (class_name) {
            case "about":
                loadPage('about.html');
                break;
            case "online_resume":
                loadPage('paper_resume_en.html');
                break;
            case "spinners_end":
                loadPage("17_Feb_2018.html");
                break
            default:
                loadPage('about.html');
        }
    }        

    caller.addEventListener('transitionend', function _eventHandler(){
        caller.style.display = "none";
    
        var container = document.getElementsByClassName("flex-container")[0];
        container.style.display = "flex";

        var icon = document.getElementsByClassName("icon")[0];
        icon.style.display = "inline-block";

        caller.removeEventListener('transitionend', _eventHandler);
    });
    
}

function goBack() {
    var header = document.getElementsByClassName("header")[0];
    var header_text = document.getElementsByClassName("header-text")[0];
    var github_icon = document.getElementsByClassName("fa-github")[0];
    var button_container = document.getElementsByClassName("button-container")[0];
    var icon = document.getElementsByClassName("icon")[0];
    var container = document.getElementsByClassName("flex-container")[0];

    icon.style.display = "none";
    container.style.display = "none";
    header.style.height = "30%";
    header_text.style.top = "15%";
    header_text.style.fontSize = "2.5em";
    button_container.style.height = "50%";
    github_icon.style.fontSize = "1.0em";

    header_text.addEventListener('transitionend', function _eventHandler(){
        var buttons = document.getElementsByClassName("buttons");
        for (var i = 0; i < buttons.length; i++){
            buttons[i].style.display = "block";
            if (buttons[i] == r_object) {
                buttons[i].style.marginTop = "150px";
                buttons[i].style.height = r_height;
                buttons[i].style.width = r_width;
                buttons[i].innerHTML = r_innerHTML;
            }
        }

        var bot = document.getElementsByClassName("bottom-line");
        for (var i = 0; i < bot.length; i++) {
            bot[i].style.display = "block";
        }

        header_text.removeEventListener('transitionend', _eventHandler);
    })
}

function bgColorFade() {
    document.getElementsByClassName("header")[0].style.backgroundImage = "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)";
}
