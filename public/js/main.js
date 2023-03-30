console.log("hi");
const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city = document.getElementById('cityName');
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');
const getInfo = async (event) => {
    const citynameVal = cityname.value;
    event.preventDefault();
    if (citynameVal === "") {
        city.innerText = `Please Enter the city name before search `;
        datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${citynameVal}&units=metric&appid=0850385728319840e02ad537e54c47b0`;
            const response = await fetch(url);
            const data = await response.json()
            //making array pf object
            const arrdata = [data];

            temp.innerHTML = `${arrdata[0].main.temp}<sup>∘</sup>C`;
            const tempMood = arrdata[0].weather[0].main;
            city.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            console.log(tempMood)
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68; '›</i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6; '›</i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68; '›</i>";
            }
            datahide.classList.remove("data_hide");
        }
        catch
        {
            city.innerText = `Please enter the city name properly`;
            datahide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener('click', getInfo);



//day and time
const getCurrentDay = () => {
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    return days;
}

let day = document.getElementById('day');
day.innerText = getCurrentDay();
setInterval(()=>{
    day.innerText = getCurrentDay();
}, 100000000);

//Get and format current time
const getCurrentTime = () => 
{
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var date=now.getDate();
    var month = months[now.getMonth()];
    // var seconds=now.getSeconds();
    var period = "am"
    if (hours > 11) {
        period = "pm";
        if (hours > 12) hours -= 12; // Format for 12-hr  clock
    }
    if (mins < 10) {
        mins = "0" + mins; // Format minutes
    };
    // if (seconds < 10) {
    //     seconds = "0" + seconds; // Format seconds
    // };
    return `${month} ${date} | ${hours}:${mins} ${period}`;
}


let curDate = document.getElementById("today_data");
curDate.innerText=getCurrentTime();
setInterval(()=>{
    curDate.innerText=getCurrentTime();
}, 1000);
 