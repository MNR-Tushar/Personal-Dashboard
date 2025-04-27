function toggleTheme()
{
    document.body.classList.toggle("dark");
}

function updateclock()
{
    const timeEl=document.getElementById("clock");
    const now= new Date();
    timeEl.textContent=now.toLocaleTimeString();
}
setInterval(updateclock)