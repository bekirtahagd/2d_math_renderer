//Function Setup
let funcs = document.querySelectorAll(".function");
function updateFuncs(){
    funcs = document.querySelectorAll(".function");
}

//In the beginning, make all previously created func types changeable
funcs.forEach(func => {
    makeFuncTypeChangeable(func);
});


//Create new Func
let container = document.querySelector("#function_container")
let createFunc = document.querySelector(".createFunc");
createFunc.addEventListener('click', () => {
    const template = container.firstElementChild;
    const newFunction = template.cloneNode(true);

    makeFuncTypeChangeable(newFunction);
    container.appendChild(newFunction);

    updateFuncs();
})

//Functions for Responsive Functions
function makeFuncTypeChangeable(func){
    let type = func.querySelector(".func_type");
    type.addEventListener('change', () => {
        func.setAttribute("type", type.value);
    })
}

//Read
function deleteFunction(func){
    //If func can be deleted
    if(funcs.length > 1) {
        deleteParent(func);
        updateFuncs();
    }
}
