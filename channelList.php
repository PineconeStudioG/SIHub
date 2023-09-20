<?php
if(isset($_POST['normalUser']))
{
    if($_POST['normalUser'] == true)
    {
        $channel_file = fopen("included_channels.json","r");
        $channels = json_decode(fread($channel_file,filesize("included_channels.json")));
        fclose($channel_file);
        for($i = 0; $i < sizeof($channels); $i++)
        {
            echo($channels[$i]->title.",");
        }
    }else header("Location: error.html");
}else header("Location: error.html");
?>