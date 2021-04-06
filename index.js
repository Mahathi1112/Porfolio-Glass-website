function getHobbies(){
  document.getElementById("projects").innerHTML=`<h1>Hobbies</h1>
  <h2>Whoohooo</h2>`;
  removeUnderline()
  document.getElementById('hobbies-nav').setAttribute("class", "underline");
}

function getEducation(){
  document.getElementById("projects").innerHTML=`<h1>Education</h1>
  <h2>Whoohooo</h2>`;
  removeUnderline();
  document.getElementById('education-nav').setAttribute("class", "underline");
}

function removeUnderline(){
  idList = ["education-nav","hobbies-nav","skills-nav","projects-nav","work-nav"]
  for(let id of idList){
    document.getElementById(id).setAttribute("class", "remove-underline");
  }

}