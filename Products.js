let date = new Date();
  
import {PRODUCTS} from './database.js';
//console.log(PRODUCTS)
const MAIN_PARENT = document.getElementById('mainParent');

let btnSearch = document.getElementById('btnSearch')
let searchParent = document.getElementById('searchParent')
searchParent.style.display ="none"


const CREATE_CARD = (element, parent) =>{
  
  element.image = "IMAGES/"+element.name.split(" ").join('-')+".jpg"
  
  let CARD_COL = document.createElement('div')
  CARD_COL.classList.add('col-8', 'col-md-4', 'col-lg-3', 'my-3')
  parent.appendChild(CARD_COL)
  
  let CARD = document.createElement('div')
  CARD.classList.add('card', 'h-100')
  CARD_COL.appendChild(CARD)
  
  let CARD_IMAGE = document.createElement('img')
  CARD_IMAGE.src = element.image
  CARD.append(CARD_IMAGE)
  
  let CARD_BODY = document.createElement('div')
  CARD_BODY.classList.add('card-body')
  CARD.append(CARD_BODY)
  
  let CARD_TITLE = document.createElement('h2')
  CARD_TITLE.classList.add('card-title')
  CARD_TITLE.textContent = element.name
  CARD_BODY.append(CARD_TITLE)
  
  let CARD_TEXT = document.createElement('p')
  CARD_TEXT.classList.add('card-text')
  CARD_TEXT.textContent = element.description
  CARD_BODY.append(CARD_TEXT)
  
  let CARD_BTN = document.createElement('a')
  CARD_BTN.classList.add('btn', 'btn-primary')
  
  CARD_BTN.textContent = "Buy" + " " + (("$"+ element.price )|| "$2000")
  if(!element.inStock){
    CARD_BTN.textContent = "Out Of Stock"
    CARD_BTN.classList.remove('btn-primary')
    CARD_BTN.classList.add('btn', 'muted', 'btn-warning')
    
  }
  CARD_BODY.append(CARD_BTN)
  
  return CARD
}

//THE INITIAL CRATION OF ALL THE CARDS

PRODUCTS.forEach((product)=>{
  CREATE_CARD(product, MAIN_PARENT)
})

//CREATION OF CARDS TO BE ADDED TO searchParent SECTION
//THE SEARCH FUNCTION
//import {SEARCH} from './database.js'
const SEARCH =()=>{
  searchParent.replaceChildren();
  
  let searchHeading = document.createElement('h2');
  searchHeading.classList.add('search-heading', 'display-4')
  searchParent.append(searchHeading)
  
  searchHeading.textContent = 'No Results'
  
  PRODUCTS.forEach((element)=>{
  
   let searchInput = document.getElementById('searchInput')
   let searchValue = searchInput.value.toLowerCase()
   //console.log(searchValue)
   
   let productName = element.name.toLowerCase()
  
   let searchArr = searchValue.split(' ')
   let nameArr = productName.split(' ')
   //console.log(searchArr, nameArr)
  
  let isExist = searchArr.some((element)=>nameArr.includes(element))
  
   if(searchInput.value !== null && isExist){
      console.log(element, isExist)
      searchHeading.textContent = "Search Results"
      CREATE_CARD(element, searchParent)
      }
      
  else{
    console.log(element.name+" does not exist")
    }
})
}

btnSearch.addEventListener('click', ()=>{
  SEARCH()
})

MAIN_PARENT.style.display="block"

let searchInput = document.getElementById('searchInput')
btnSearch.addEventListener('click', ()=>{
  searchParent.style.display ="block"
  MAIN_PARENT.style.display = "none"
})
searchInput.addEventListener('focus', ()=>{
  searchParent.style.display ="block"
  MAIN_PARENT.style.display = "none"
})

const cancel=()=>{
  searchParent.style.display ="none"
  MAIN_PARENT.style.display = "block"
  searchInput.value =''
}
btnCancel.addEventListener('click', ()=>{
  cancel()
})