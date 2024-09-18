let clear = document.querySelector(".empty");
let res = document.querySelector(".tex");
let numb = document.querySelectorAll("button");
let zero = document.querySelector(".lf");
let equal = document.querySelector(".equal");
let val = 0;
numb.forEach((numb)=>{
    clear.addEventListener("click", ()=>{
        res.innerText = "";
    });
    numb.addEventListener("click", ()=>{
        res.append(numb.getAttribute("value"));
        val = eval(res.innerText);
    });
    equal.addEventListener("click", ()=>{
        res.innerText = val;
    });
});
// mode 
let mode = document.querySelector(".mode");
let back = document.querySelector(".back");
let a = true;
mode.addEventListener("click", ()=>{
    if(a){
        back.style.backgroundColor = "black";
        mode.innerText = "Light";
        res.innerText = "";
        a = false;
    }
    else{
        back.style.backgroundColor = "white";
        mode.innerText = "Dark";
        res.innerText = "";
        a = true;
    }
})
