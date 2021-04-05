const socket = io();

socket.on("temp", function (data) {
    //show in browser console
    console.log(data);
    let temp = document.getElementById("temperature");
    temp.innerHTML = `${data} °C`;
});
