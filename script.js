const ham = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

console.log(ham);
ham.addEventListener('click', function(){
    if(navigation.classList.contains("visible")){
        navigation.classList.add("hidden");
        navigation.classList.remove("visible");
    }
    else if(navigation.classList.contains("hidden")){
        navigation.classList.add("visible");
        navigation.classList.remove("hidden");
    }
});