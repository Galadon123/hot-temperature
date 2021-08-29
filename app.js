async function  citysearch()
{
    const a=document.getElementById('inputvalue');
    if(a.value==''){
        document.getElementById('maindiv').innerHTML=`<h3 class="text-center text-white">Plese type a city name</h3>`
    }
    else
    {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${a.value}&appid=ebee8f32aa70f80009abb63810a454f4`;
       a.value='';
       // fetch(url)
       // .then(res=>res.json())
       // .then(data=>showone(data));
       try{
           const aaa=await fetch(url);
       const b=await aaa.json();
       showone(b);
       }
       catch
       {
           document.getElementById('maindiv').innerHTML=`<h3 class="text-center text-danger">Plese type    a valid city name</h3>`
       }
    }
}
function showone(data)
{
    document.getElementById('maindiv').innerHTML=` <div class="weather-status text-white text-center">
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
              <h1>${data.name}</h1>
              <h3><span>${(data.main.temp-273).toFixed(1)}</span>&deg;C</h3>
              <h1 class="lead">Wind  ${data.wind.speed}</h1>
       </div>`
   
}