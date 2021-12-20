window.onload = function defaultgit(){
    fetch("https://api.github.com/users/octocat")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    document.getElementById("logo").src = data.avatar_url;
    document.getElementById("arobase").innerHTML = "@" + data.login;
    if(data.bio == null){
        document.getElementById("bio").innerHTML = "This profil has no bio";
    }else{
        document.getElementById("bio").innerHTML = data.bio;
    }
    document.getElementById("repos").innerHTML = data.public_repos;
    let daterec = new Date (data.created_at);
    document.getElementById("joined").innerHTML = "Joined " + daterec.toLocaleDateString();
    document.getElementById("followers").innerHTML = data.followers;
    document.getElementById("following").innerHTML = data.following;
    document.getElementById("location").innerHTML = data.location;
    document.getElementById("website").innerHTML = data.blog;
    document.getElementById("twitter").innerHTML = data.twiiter_username;
    document.getElementById("company").innerHTML = data.company;
    document.getElementById("pseudo").innerHTML = data.name;
  })
}


function getgit(){
    let pseudo = document.getElementById("pseudogit").value;
    console.log(pseudo);
    let url = "https://api.github.com/users/" + pseudo ;
    console.log(url);

    fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    
    document.getElementById("logo").src = data.avatar_url;
    document.getElementById("arobase").innerHTML = "@" + data.login;
    
    if(data.bio === null){
        document.getElementById("bio").innerHTML = "This profil has no bio";
    }else{
        document.getElementById("bio").innerHTML = data.bio;
    }
    document.getElementById("repos").innerHTML = data.public_repos;
    let daterec = new Date (data.created_at);
    document.getElementById("joined").innerHTML = "Joined " + daterec.toLocaleDateString();
    document.getElementById("followers").innerHTML = data.followers;
    document.getElementById("following").innerHTML = data.following;
    document.getElementById("location").innerHTML = data.location;
    document.getElementById("website").innerHTML = data.blog;
    document.getElementById("twitter").innerHTML = data.twiiter_username;
    document.getElementById("company").innerHTML = data.company;
    document.getElementById("pseudo").innerHTML = data.name;
  })
  .catch((err) => {
    
  })
}
function theme(){
  let themep = document.getElementById("themep");
  if(document.getElementById("themep").innerText == "LIGHT"){
    themep.innerHTML = "NIGHT";
    document.getElementById("img").src="assets/icon-moon.svg";
  }
  else{
    themep.innerHTML = "LIGHT";
    document.getElementById("img").src="assets/icon-sun.svg";
  }
  
  
 let body = document.body;
  body.classList.toggle("light-mode-body");
  let search = document.getElementById("search");
  search.classList.toggle("light-mode-search");
  let card = document.getElementById("card");
  card.classList.toggle("light-mode-card");
  let main = document.getElementById("main");
  main.classList.toggle("light-mode-main");
  let center = document.getElementById("center");
  center.classList.toggle("light-mode-center");
  let pseudourl = document.getElementById("pseudogit");
  pseudourl.classList.toggle("light-mode-pseudourl");
  
}