var swiper = new Swiper(".mySwiper-courses", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});

let slider = document.getElementById('slider_courses');
let Courses = [];

Display();

if(JSON.parse(localStorage.getItem("Courses")) == null) {
     Courses=[];
}
else {
    Courses = JSON.parse(localStorage.getItem("Courses"));
    Display();
}
console.log(Courses);

function Display() {
    Courses = JSON.parse(localStorage.getItem("Courses"));
    let val ='';
    let counter = 0;
    let Teachers = JSON.parse(localStorage.getItem("teacherRecord"));
    let path;

    for(let i=0;i<Courses.length;i++) {

        if(Courses[i].Special == 1) {

            for(let k =0;k<Teachers.length;k++) {
               
                if(Courses[i].Teacher_Name === Teachers[k].Name) {
                    path = Teachers[k].Photo;
                }
            }
            
            counter++;
            val +=` <div class="show-course swiper-slide">
                        <div class="card" style="width: 270px; height: 400px; margin-left: 40px;">
                            <img class="card-img-top" src="${Courses[i].Image}">
                            <div class="card-body">
                                <h4 class="card-title" style="font-weight: bold;">${Courses[i].Name} Course</h4>
                                <p class="card-text"><i class="fa-solid fa-clock" ></i> ${Courses[i].hours} : ${Courses[i].min}</p>
                                <p class="card-text"><i class="fa-solid fa-file-invoice-dollar"></i> ${Courses[i].Price}$</p>
                                <hr>
                                <img class="img-teacher" src="${path}" style="width: 35px; height: 35px; border-radius:50% ;">
                                <h6 class="teacher-name" style="display: inline-block;">${Courses[i].Teacher_Name}</h6>
                            </div>
                        </div>
                    </div>`;
        }
        else {
            console.log(Courses[i].Image);
        }
    }
    slider.innerHTML = val;
}

/*
val +=`  <div class="show-course swiper-slide" style="width:23%;">
                 <img src="${Courses[i].Image}" style="width:100% ; margin:0px 0px ; border-top-left-radius: .75rem; border-top-right-radius: .75rem;">
                 <div style="margin-top:10px ; margin-left:10px ;">
                 <h4>${Courses[i].Name} Course</h4>
                 <p><i class="fa-solid fa-clock" ></i> ${Courses[i].hours} hours ${Courses[i].min} minutes</p>
                 <p><i class="fa-solid fa-file-invoice-dollar"></i> ${Courses[i].Price} $</p>
                 <hr>
                 <img src="${path}" style="width:30px; border-radius:50% ;">
                 <h6 style="display:inline-block ;">${Courses[i].Teacher_Name}</h6>
                 </div>
                 </div>`;
*/
