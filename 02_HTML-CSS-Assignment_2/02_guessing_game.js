var html_colors=[
    "aqua",
    "beige",
    "blue",
    "yellow",
    "cyan",
    "gold",
    "white",
    "gray",
    "red",
    "green",
    "orange",
    "magenta"];

function do_game()
{
    html_colors.sort();
    //alert(html_colors);
    var response, finished;
    finished=false;

    do {
        var randomIndex = Math.floor(Math.random()* html_colors.length);
        alert("Max colors is "+html_colors.length + " Random index is "+randomIndex);
        response=prompt("Continue?");
        if (response.indexOf("y")!=0)
            finished=true;
    } while (!finished);



}
