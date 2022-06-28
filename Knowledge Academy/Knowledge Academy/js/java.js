
let slider = document.getElementById('slider_courses');
let btn_slider =document.getElementById('btn-slid');
let Courses = [];
Display();

if(JSON.parse(localStorage.getItem("Courses")) == null)
{
     Courses=[];
}
else {
    Courses = JSON.parse(localStorage.getItem("Courses"));
    Display();
}
console.log(Courses);

function Display()
{
    Courses = JSON.parse(localStorage.getItem("Courses"));
    let val ='';
    let counter = 0;
    let btn ='';
    let flag =1;
    if(Courses[0].Special == 1)
    {
    val =`
      <div class="carousel-item active">
      <img src="imgs/courses-image/${Courses[0].Image}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <h5>${Courses[0].Name}  Course</h5>
      <p>Teacher : ${Courses[0].Teacher_Name}</p>
      </div>
      </div>
      `;
    }
    else
    {
        for(let i=0;i<Courses.length;i++)
        {
            if(Courses[i].Special == 1)
            {
                val =`
                <div class="carousel-item active">
                <img src="imgs/courses-image/${Courses[i].Image}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>${Courses[i].Name}  Course</h5>
                <p>Teacher : ${Courses[i].Teacher_Name}</p>
                </div>
                </div>
                `;
                flag =i+1;
                break;
            }
        }
    }
    btn = `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>`;
    for(let i=flag;i<Courses.length;i++)
    {
        if(Courses[i].Special == 1)
        {
            counter++;
        val += 
        `
        <div class="carousel-item ">
        <img src="imgs/courses-image/${Courses[i].Image}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h5>${Courses[i].Name}  Course</h5>
        <p>Teacher : ${Courses[i].Teacher_Name}</p>
        </div>
        </div>
        `;
        btn +=
        `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to=" ${counter}" aria-label="Slide ${counter}"></button>
        `;
        }
    }
    slider.innerHTML = val;
    btn_slider.innerHTML = btn;
}