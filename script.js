
let Api="https://jsonplaceholder.typicode.com/photos"

async function getdata() {
 let response= await fetch(Api)
 let data= await response.json()
 console.log(data)
 let htmlstring=""
 data.forEach((elem)=>{
   
   htmlstring+= `
        <div class="hero-left">
                 <div class="card">
                    <div class="card-details">
                      <img src=${elem.thumbnailUrl}  />
                       <p>${elem.title} </p>
                    </div>
                 </div>
              </div>
   `
 })
 document.querySelector(".hero").innerHTML=htmlstring
}

getdata() 
