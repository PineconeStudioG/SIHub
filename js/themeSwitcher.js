function changeTheme()
{
    let css_root = document.querySelector(":root");
    let css_variables = getComputedStyle(css_root);
    let theme_swithcer = document.getElementById("themeSwitcher");

    if(css_variables.getPropertyValue("--background-color") == "#FFFFFF" && css_variables.getPropertyValue("--fonts-color") == "black")
    {
        css_root.style.setProperty("--background-color", "black");
        css_root.style.setProperty("--fonts-color", "white");
        css_root.style.setProperty("--menu-bg-color", "rgb(25, 25, 25)");
        css_root.style.setProperty("--menu-gradient-one", "white");
        css_root.style.setProperty("--menu-gradient-two", "black");
        theme_swithcer.setAttribute("src","img/light_theme.png");
        localStorage.setItem("theme","dark");
    }else
    {
        css_root.style.setProperty("--background-color", "#FFFFFF");
        css_root.style.setProperty("--fonts-color", "black");
        css_root.style.setProperty("--menu-bg-color", "#FFFFFF");
        css_root.style.setProperty("--menu-gradient-one", "black");
        css_root.style.setProperty("--menu-gradient-two", "white");
        theme_swithcer.setAttribute("src","img/night_theme.webp");
        localStorage.setItem("theme","light");
    }
}

function implementSaved()
{
    let css_root = document.querySelector(":root");
    let css_variables = getComputedStyle(css_root);
    let theme_swithcer = document.getElementById("themeSwitcher");

    let savedTheme = localStorage.getItem("theme");

    if(savedTheme == "dark")
    {
        css_root.style.setProperty("--background-color", "black");
        css_root.style.setProperty("--fonts-color", "white");
        css_root.style.setProperty("--menu-bg-color", "rgb(25, 25, 25)");
        css_root.style.setProperty("--menu-gradient-one", "white");
        css_root.style.setProperty("--menu-gradient-two", "black");
        theme_swithcer.setAttribute("src","img/light_theme.png");
    }else if(savedTheme == "light")
    {
        css_root.style.setProperty("--background-color", "#FFFFFF");
        css_root.style.setProperty("--fonts-color", "black");
        css_root.style.setProperty("--menu-bg-color", "#FFFFFF");
        css_root.style.setProperty("--menu-gradient-one", "black");
        css_root.style.setProperty("--menu-gradient-two", "white");
        theme_swithcer.setAttribute("src","img/night_theme.webp");
    }
}
window.addEventListener('load',function(){
        setTimeout(implementSaved, 100);
});