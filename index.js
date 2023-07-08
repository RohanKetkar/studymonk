import data from "./Api.js"

//initialising ids
let body = document.getElementById("body")
let search = document.getElementById("search")

let select = document.getElementById("select")
let reset = document.getElementById("Reset")
//declaring function
function mapingdata() {
    data.map((name) => {
        let li = document.createElement("li")
        li.innerText = name.name
        body.appendChild(li)


    })
}

mapingdata()
function searching(e) {


    body.innerText = ""
    data.forEach((name) => {

        if (name.name.includes(e.target.value)) {
            let li = document.createElement("li")
            li.innerText = name.name
            body.appendChild(li)
        }


    })

}
function category() {
    let opti = document.getElementsByClassName(".option")
    console.log(opti.innerHTML)

}
// category()
document.getElementById('select').addEventListener('change', function () {
    console.log('You selected: ', this.value);
    body.innerText = ""
    data.forEach((job) => {
        if (job.job == this.value) {
            console.log("job.job")
            console.log(job.name)
            let li = document.createElement("li")
            li.innerText = job.name
            body.appendChild(li)

        }
    })
});
function resetbutton() {
    body.textContent = ""
    data.map((name) => {


        let li = document.createElement("li")
        li.innerText = name.name
        body.appendChild(li)

    })

}
//function 


select.addEventListener("change", category)
search.addEventListener("input", searching)
reset.addEventListener("click", resetbutton)