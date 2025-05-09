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
setInterval(updateclock);

function weatherInfo()
{
    fetch("https://api.weatherapi.com/v1/current.json?key=f7b41d9fdf4c436aa7a192633252504&q=Dhaka")
    .then((res)=>res.json())
    .then((data)=>{
        const w=document.getElementById("setweather");
        w.textContent=`${data.location.name} ${data.current.temp_c},${data.current.condition.text}`
    })
    .catch((err)=>{
        const w=document.getElementById("setweather");
        w.textContent="Please given proper country name or loacation";
    });
}
weatherInfo()

function TodoList()
{
    const input=document.getElementById("todoInput");
    const list=document.getElementById("todolist");
    const li=document.createElement("li");

    li.textContent=input.value;
    li.addEventListener("click",()=>li.remove());
    list.appendChild(li);

}

function savenote()
{
    const note=document.getElementById("noteInput").value;
    localStorage.setItem("note",note);
    displaynote();
}

function displaynote()
{
    const note=localStorage.getItem("note");
    const area= document.getElementById("notedisplay");
    area.textContent=note;
}
displaynote();


function contactInfo()
{
    document.getElementById("contactform").addEventListener("submit",(event)=>{
        event.preventDefault();
        const formdata=new FormData(event.target);
        const entries =[...formdata.entries()].reduce((acc,[k,v])=>{
            acc[k]=v;
            return acc;
        },{});
    
        alert(`Thanks ${entries.name}, We recieved your message!`);
    });
}
contactInfo();

