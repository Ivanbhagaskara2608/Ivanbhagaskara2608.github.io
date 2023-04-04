let menuVisible = false;
//Function that hides or shows the menu
function showMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function selectMenu(){
    //Hide the menu once I select an option
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Function that applies the animations of the skills
function effectSkills(){
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let skillsClass = document.getElementsByClassName("progress");
        skillsClass[0].classList.add("javascript");
        skillsClass[1].classList.add("htmlcss");
        skillsClass[2].classList.add("python");
        skillsClass[3].classList.add("kotlin");
        skillsClass[4].classList.add("coreldraw");
        skillsClass[5].classList.add("communication");
        skillsClass[6].classList.add("teamwork");
        skillsClass[7].classList.add("creativity");
        skillsClass[8].classList.add("dedication");
        skillsClass[9].classList.add("project");
    }
}


//detect the scrolling to apply the animation of the skill bar
window.onscroll = function(){
    effectSkills();
} 