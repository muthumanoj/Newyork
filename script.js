let dates = new Date();
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ["January",'Febrary','March','April','May','June','july','August','September','October','November','December'];
let day = days[dates.getDay()]
let month = months[dates.getMonth()]
let date = dates.getDate()
let year = dates.getFullYear()
let datetime = document.querySelector('.col-2')
datetime.innerHTML=day+","+date+" "+month+" "+year

let home = "home"
apiUrl(home)

let navselector = document.querySelectorAll('.nav-link')
console.log(navselector);
navselector.forEach(event => {
    event.addEventListener("click",function(){
        let remcard = document.querySelectorAll('.card');
        remcard.forEach(() => {
            document.getElementById('deldata').remove();
        })
        apiUrl(event.innerHTML);
    })
});




async function apiUrl(value){
    let apiUrl = "https://api.nytimes.com/svc/topstories/v2/"+value+".json?api-key=Dui2ixNGuzNul0jRPI98PqbVzMCRZiaA"

console.log(apiUrl);
const respnse = await fetch(apiUrl)
const data = await respnse.json();
console.log(data.results)
const dresult = data.results
dresult.forEach((element)=>{
    let title = element.title;
    let news = element.abstract;
    let time = element.updated_date;
    let url = element.url;
    let img = element.multimedia[2].url;


   











let card = document.createElement('div')
card.id = 'deldata'
card.className='card mb-3';
document.querySelector('.container').appendChild(card);

let row = document.createElement('div')
row.className='row g-0';
card.appendChild(row)

let col = document.createElement('div');
col.className='col-md-8';
row.appendChild(col);

let cardbody = document.createElement('div')
cardbody.className='card-body'
col.appendChild(cardbody);

let cardtitle = document.createElement('h5');
cardtitle.className="card-Text"
let cardtext = document.createTextNode(title)
cardtitle.appendChild(cardtext)
cardbody.appendChild(cardtitle)

let cardpara = document.createElement('p');
cardpara.className='card-text'
let cardtext1 = document.createTextNode(news)
cardpara.appendChild(cardtext1)
cardbody.appendChild(cardpara)

let cardpara1 = document.createElement('p')
cardpara1.className='card-text'
let cardsmall = document.createElement('small')
cardsmall.className='text-muted'
let cardtext3 = document.createTextNode(time)
cardsmall.appendChild(cardtext3)
cardpara1.appendChild(cardsmall)
cardbody.appendChild(cardpara1)

let anger = document.createElement('a')
anger.className = 'anger'
anger.innerText='continue'
anger.setAttribute('href',url)
cardpara.appendChild(anger);



let imagediv = document.createElement("div")
imagediv.className='col-md-4'
row.appendChild(imagediv)

let image = document.createElement('img')
image.setAttribute('src',img)
image.setAttribute('alt',"Image1")
imagediv.appendChild(image)
})

}
