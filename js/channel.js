const mainPage = document.querySelector("main");

var channel = localStorage.getItem('channel');

if(channel == null)
{
    window.location.href = "./";
}

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
        document.getElementsByTagName("main")[0].appendChild(header);
    }
}
xhr_ChannelList.send(normalUser);

var channelData = new FormData();
channelData.append("channelName",channel);

var xhr_data = new XMLHttpRequest();
xhr_data.open("POST","./channelDataPreperation.php", true);
xhr_data.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        if(this.responseText == "not found")
            window.location.href = "index.html";
        else
        {
            let article = document.createElement("article");
            let footer = document.createElement("footer");

            const videos = JSON.parse(this.responseText);
            let one = `<div class = "channel_name"><h1>${videos[0]}</h1></div>`;
            article.innerHTML += one;
            let chann_block = document.createElement("section");
            chann_block.setAttribute("class", "channel_block");
            for(var i = 0; i < videos[3].length; i++)
            {
                let two = `<div class = "video_info" onclick = "window.open('video.html'); localStorage.setItem('video','${videos[3][i][0]}'); localStorage.setItem('videoTitle','${videos[3][i][2]}'); localStorage.setItem('channel','${videos[0]}')"><img src = "${videos[3][i][1]}" class = "video_thumbnail"><div class = "video_title">${videos[3][i][2]}</div><div class = "video_channel">${videos[0]}</div></div>`;
                chann_block.innerHTML += two;
            }
            article.appendChild(chann_block);

            footer.innerHTML = `<a href = "privacyPolicy.html">Privacy policy</a> | <a href = "cookiePolicy.html">Cookie policy</a> | <a href = "termsOfUse.html">Terms of use</a> | <a href = "contact.html">Contact</a>`;

            document.getElementsByTagName("main")[0].appendChild(article);
            document.getElementsByTagName("main")[0].appendChild(footer);
        }
    }
}
xhr_data.send(channelData);