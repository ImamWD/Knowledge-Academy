let count = JSON.parse(localStorage.getItem("Courses"));
document.getElementById('num-of-courses').innerHTML = count.length;


let count1 = JSON.parse(localStorage.getItem("students"));
document.getElementById('num-of-students').innerHTML = count1.length;
