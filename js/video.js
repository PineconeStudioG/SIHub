const mainPage = document.querySelector("main");

var videoID = localStorage.getItem("video");
var videoTitle = localStorage.getItem("videoTitle");
var channel = localStorage.getItem("channel");

if(videoID == null || videoTitle == null || channel == null)
    window.location.href = "index.html";

var videoYTembed = `<iframe src="https://www.youtube.com/embed/${videoID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class = "video_title">${videoTitle}</div><div class = "video_channel" onclick = "window.open('channel.html'); localStorage.setItem('channel','${channel}');">${channel}</div>`;

var article = document.createElement("article");
var footer = document.createElement("footer");

var normalUser = new FormData();
normalUser.append('normalUser', true);

var xhr_ChannelList = new XMLHttpRequest();
xhr_ChannelList.open("POST","./channelList.php");
xhr_ChannelList.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        let channelList = this.responseText.split(",");
        console.log(channelList);

        let header = document.createElement("header");
        header.innerHTML += `<input type="checkbox" id="hamburger-input" class="burger-shower" /><label id="hamburger-menu" for="hamburger-input"><nav id="sidebar-menu"> <h3>SI Hub</h3><ul><h4>Channels</h4></ul></nav></label><div class="overlay"></div><h3><a class = "mainPageLink" href = "./">SI Hub</a></h3><img src = "img/night_theme.webp" alt = "Theme switcher" id = "themeSwitcher" onclick = "changeTheme()">`;
        for(var h = 0; h < channelList.length-1; h++)
        {   
            let list = header.getElementsByTagName("ul")[0];
            let list_element = document.createElement("li");
            list_element.innerText = `${channelList[h]}`;
            list_element.setAttribute("onclick",`window.open('channel.html'); localStorage.setItem('channel','${channelList[h]}');`);
            list_element.setAttribute("class", "menu_element");
            list.appendChild(list_element);
        }
        mainPage.appendChild(header);
    }
}
xhr_ChannelList.send(normalUser);

article.innerHTML = videoYTembed;

footer.innerHTML = `<a href = "privacyPolicy.html">Privacy policy</a> | <a href = "cookiePolicy.html">Cookie policy</a> | <a href = "termsOfUse.html">Terms of use</a> | <a href = "contact.html">Contact</a>`;


mainPage.appendChild(article);
mainPage.appendChild(footer);