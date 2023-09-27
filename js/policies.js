var normalUser = new FormData();
normalUser.append('normalUser', true);

var xhr_data = new XMLHttpRequest();
xhr_data.open("POST","./channelList.php", true);
xhr_data.onreadystatechange = function()
{
    if(this.readyState == 4 && this.status == 200)
    {
        if(this.responseText == "Error")
            window.location.href = "error.html";
        else
        {
            let header = document.createElement("header");
            let article = document.createElement("article");
            let footer = document.createElement("footer");
            
            let channelList = this.responseText.split(",");

            header.innerHTML += `<input type="checkbox" id="hamburger-input" class="burger-shower" /><label id="hamburger-menu" for="hamburger-input"><nav id="sidebar-menu"> <h3>SI Hub</h3><ul><h4>Channels</h4></ul></nav></label><div class="overlay"></div><h3><a class = "mainPageLink" href = "./">SI Hub</a></h3><img src = "img/night_theme.webp" alt = "Theme switcher" id = "themeSwitcher" onclick = "changeTheme()">`;
            for(var h = 0; h < channelList.length-1; h++)
            {   
                let list = header.getElementsByTagName("ul")[0];
                let list_element = document.createElement("li");
                list_element.innerText = `${channelList[h]}`;
                list_element.setAttribute("onclick",`window.open('channel.html'); localStorage.setItem('channel','${channelList[h]}');`);
                list_element.setAttribute("class", "menu_element");
                list.appendChild(list_element);
            };

            if(window.location.pathname.includes("privacyPolicy"))
            {
                article.innerHTML = `<b>Privacy Policy for SIHub</b>
            <br><b><i>Last Updated: 6.10.2023</i></b><br>
            <br><b>Introduction</b><br>
            Welcome to <i><b>SIHub!</b></i> This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, located at <a href = "https://sihub.pineentr.com" target = "_blank">sihub.pineentr.com</a>. We respect your privacy and are committed to safeguarding your personal data.
            <br><br><b>Information We Collect</b><br>
            <ul>
                <li>Optional IP Logs: Our hosting service may collect and maintain logs of IP addresses that access our website. These logs are maintained for security and performance monitoring purposes. We do not use these logs to personally identify you.</li>
                <li>Data Collected by External YouTube Scripts: We may embed YouTube videos on our website. When you interact with these videos, YouTube may collect data according to its own privacy policies. We do not have access to or control over the data collected by YouTube.</li>
            </ul>
            <br><b>How We Use Your Information</b><br>
            <ul>
                <li>Optional IP Logs: The IP logs collected by our hosting service are used for security and performance monitoring of our website. They are not used to identify individual users and are not shared with third parties.</li>
                <li>Data Collected by External YouTube Scripts: Any data collected by YouTube scripts is subject to YouTube's own privacy policies. We do not use this data for any purpose, and we do not have access to it.</li>
            </ul>
            <br><b>Data Retention</b><br>
            We retain IP logs collected by our hosting service for a limited period to ensure the security and performance of our website. We do not use this data to identify you personally.
            <br><br><b>Your Choices</b><br>
            You may disable cookies or manage your cookie preferences through your web browser settings. Please refer to our <a href = "cookiePolicy.html">Cookie Policy</a> for more information on how to do this.
            <br><br><b>Third-Party Websites and Services</b><br>
            Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these websites or services. Please review their privacy policies before providing any personal information.
            <br><br><b>Updates to This Privacy Policy</b><br>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Last Updated" date at the top of the policy.
            <br><br><b>Contact Us</b><br>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href = "mailto:pineconestudio@proton.me">pineconestudio@proton.me</a>.
            Thank you for visiting SIHub!`;
            }else if(window.location.pathname.includes("cookiePolicy"))
            {
                article.innerHTML = `<b>Cookie Policy for SIHub</b>
                <br><b><i>Last Updated: 6.10.2023</i></b><br>
                <br><b>Introduction</b><br>
                Welcome to <i><b>SIHub!</b></i> This website, located at <a href = "https://sihub.pineentr.com" target = "_blank">sihub.pineentr.com</a>, (referred to as "we," "us," or "our") uses cookies to enhance your browsing experience. This Cookie Policy explains how we use cookies on our website and how you can manage your cookie preferences.
                <br><br><b>What Are Cookies?</b><br>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                <br><br><b>Our Use of Cookies</b><br>
                At SIHub, we respect your privacy, and we want you to know that we do not use any cookies on our website except for those provided by external YouTube scripts. These cookies are essential for embedding and viewing YouTube videos on our website.
                <br><br><b>Types of Cookies We Use</b><br>
                <ul>
                    <li>Third-Party Cookies (YouTube): We may embed YouTube videos on our website. When you interact with these videos, YouTube may place cookies on your device to collect information about your browsing habits and preferences. These cookies are subject to YouTube's own privacy and cookie policies. Please refer to YouTube's privacy policy for more information.</li>
                </ul>
                <br><b>Managing Your Cookie Preferences</b><br>
                Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser.
                Please note that if you choose to disable cookies, some features and functionality of our website may not work correctly.
                <br><br><b>Updates to This Cookie Policy</b><br>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Last Updated" date at the top of the policy.
                <br><br><b>Contact Us</b><br>
                If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at <a href = "mailto:pineconestudio@proton.me">pineconestudio@proton.me</a>.
                Thank you for visiting SIHub!`;
            }else if(window.location.pathname.includes("termsOfUse"))
            {
                article.innerHTML = `<b>Terms of Service for SIHub</b>
                <br><b><i>Last Updated: 6.10.2023</i></b><br>
                <br><b>Introduction</b><br>
                Welcome to <i><b>SIHub!</b></i> These Terms of Service ("Terms") outline the terms and conditions governing your use of our website, located at <a href = "https://sihub.pineentr.com" target = "_blank">sihub.pineentr.com</a>. By accessing or using our website, you agree to comply with these Terms.
                <br><br><b>No Additional Terms of Usage</b><br>
                SIHub does not have any additional terms of usage for its users beyond these Terms. Your use of our website is subject solely to these Terms.
                <br><br><b>Content Sources</b><br>
                The content on SIHub is sourced from selected channels on YouTube, chosen by the creators of SIHub, as well as user suggestions. The content is embedded from YouTube and is governed by YouTube's terms of service and privacy policy.
                <br><br><b>Delisting Process</b><br>
                If you are the creator of a YouTube channel and wish to have your channel delisted from SIHub, please contact us using the information provided in the <a href = "contact.html" target = "_blank">"Contact"</a> section of our website. We will promptly review your request and, upon verification, remove your channel from our website.
                <br><br><b>Intellectual Property</b><br>
                All content on SIHub is provided for informational and entertainment purposes only. The intellectual property rights for the content hosted on YouTube remain with the respective creators and YouTube. SIHub does not claim any ownership over the content displayed on our website.
                <br><br><b>User Responsibilities</b><br>
                By using SIHub, you agree not to:
                <ul>
                    <li>violate any applicable laws or regulations</li>
                    <li>attempt to disrupt the operation of our website</li>
                </ul>
                <br><b>Termination</b><br>
                We reserve the right to terminate or suspend your access to SIHub at our discretion, without prior notice, for any violation of these Terms or for any other reason we deem appropriate.
                <br><br><b>Changes to These Terms</b><br>
                We may update these Terms from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated "Last Updated" date at the top of the document.
                <br><br><b>Contact Us</b><br>
                If you have any questions or concerns about these Terms of Service or any other matters related to SIHub, please contact us at <a href = "mailto:pineconestudio@proton.me">pineconestudio@proton.me</a>.
                Thank you for visiting SIHub!`;
            }else if(window.location.pathname.includes("contact"))
            {

            }
            

            footer.innerHTML = `<a href = "privacyPolicy.html">Privacy policy</a> | <a href = "cookiePolicy.html">Cookie policy</a> | <a href = "termsOfUse.html">Terms of use</a> | <a href = "contact.html">Contact</a>`;

            document.getElementsByTagName("main")[0].appendChild(header);
            document.getElementsByTagName("main")[0].appendChild(article);
            document.getElementsByTagName("main")[0].appendChild(footer);
        }
        
    }
}
xhr_data.send(normalUser);