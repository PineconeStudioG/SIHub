var normalUser = new FormData();
normalUser.append('normalUser', true);

var xhr_data = new XMLHttpRequest();
xhr_data.open("POST","./dataPreperation.php", true);
xhr_data.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        if(this.responseText == "Error")
            window.location.href = "error.html";
        else
        {
            const loading_screen = document.getElementsByClassName('loading_screen');
            loading_screen[0].style.display = "none";

            let header = document.createElement("header");
            let article = document.createElement("article");
            let footer = document.createElement("footer");
            
            header.innerHTML += `
                <input type="checkbox" id="hamburger-input" class="burger-shower" />
                <label id="hamburger-menu" for="hamburger-input">
                    <nav id="sidebar-menu">
                        <h3>SI Hub</h3>
                        <ul><h4>Channels</h4></ul></nav></label><div class="overlay"></div><h3>SI Hub</h3><img src = "img/night_theme.webp" alt = "Theme switcher" id = "themeSwitcher" onclick = "changeTheme()">`;

            const videos = JSON.parse(this.responseText);

            for(var h = 0; h < videos.length; h++)
            {
                let list = header.getElementsByTagName("ul")[0];
                let list_element = document.createElement("li");
                list_element.innerText = `${videos[h][0]}`;
                list_element.setAttribute("onclick",`window.open('channel.html'); localStorage.setItem('channel','${videos[h][0]}');`);
                list_element.setAttribute("class", "menu_element");
                list.appendChild(list_element);
            }

            for(var i = 0; i < videos.length; i++)
            {
                let one = `<div class = "channel_name" onclick = "window.open('channel.html'); localStorage.setItem('channel','${videos[i][0]}');"><h1>${videos[i][0]}</h1></div>`;
                article.innerHTML += one;
                let chann_block = document.createElement("section");
                chann_block.setAttribute("class", "channel_block");
                for(var j = 3; j < videos[i].length - 3; j++)
                {
                    let two = `<div class = "video_info"><div onclick = "window.open('video.html'); localStorage.setItem('video','${videos[i][j][0]}'); localStorage.setItem('videoTitle','${videos[i][j][2]}'); localStorage.setItem('channel','${videos[i][0]}')"><img src = "${videos[i][j][1]}" class = "video_thumbnail"><div class = "video_title">${videos[i][j][2]}</div></div><div class = "video_channel" onclick = "window.open('channel.html'); localStorage.setItem('channel','${videos[i][0]}')">${videos[i][0]}</div></div>`;
                    chann_block.innerHTML += two;
                }
                article.appendChild(chann_block);
            }

            footer.innerHTML = `<a href = "privacyPolicy.html">Privacy policy</a> | <a href = "cookiePolicy.html">Cookie policy</a> | <a href = "termsOfUse.html">Terms of use</a> | <a href = "contact.html">Contact</a>`;

            document.getElementsByTagName("main")[0].appendChild(header);
            document.getElementsByTagName("main")[0].appendChild(article);
            document.getElementsByTagName("main")[0].appendChild(footer);
        }
        
    }
}
xhr_data.send(normalUser);