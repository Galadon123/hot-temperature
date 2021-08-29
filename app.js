async function  citysearch()
{
    const a=document.getElementById('inputvalue');
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${a.value}&appid=ebee8f32aa70f80009abb63810a454f4`;
    a.value='';
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>showone(data));
    const aaa=await fetch(url);
    const b=await aaa.json();
    showone(b);
}
function showone(data)
{
    console.log(data);
    console.log(data.name);
    document.getElementById('maindiv').innerHTML=` <div class="weather-status text-white text-center">
                         <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
                         <h1>${data.name}</h1>
                         <h3><span>${(data.main.temp-273).toFixed(1)}</span>&deg;C</h3>
                         <h1 class="lead">Wind  ${data.wind.speed}</h1>
                    </div>`
   
}