import {PRODUCTS} from './database.js'

const CREATE_CARD =(element, parent)=>{
  element.image = "IMAGES/"+element.name.split(" ").join('-')+".jpg"
  
  let CARD_COL = document.createElement('div')
  CARD_COL.classList.add('col-8', 'col-md-4', 'col-lg-3')
  parent.append(CARD_COL)
  
  let CARD = document.createElement('div')
  CARD.classList.add('card', 'h-100')
  CARD_COL.append(CARD)
  
  let CARD_IMAGE = document.createElement('img')
  CARD_IMAGE.classList.add('img-fluid')
  CARD_IMAGE.src = element.image
  CARD.append(CARD_IMAGE)
  
  let CARD_BODY = document.createElement('div')
  CARD_BODY.classList.add('card-body')
  CARD.append(CARD_BODY)
  
  let CARD_TITLE = document.createElement('h4')
  CARD_TITLE.classList.add('card-title')
  CARD_TITLE.textContent = element.name
  CARD_BODY.append(CARD_TITLE)
  
  let CARD_TEXT = document.createElement('p')
  CARD_TEXT.classList.add('card-text')
  CARD_TEXT.textContent = element.description
  CARD_BODY.append(CARD_TEXT)
  
  let CARD_BTN = document.createElement('a')
  CARD_BTN.classList.add('btn', 'btn-primary', 'my-3')
  CARD_BTN.textContent = "Buy $"+ element.price
  
  if(!element.inStock || element.price == null){
    CARD_BTN.textContent = "Out of Stock"
    CARD_BTN.classList.replace('btn-primary', 'btn-warning')
  }
  CARD_BODY.append(CARD_BTN)
  
  return CARD_COL
}
const SEARCH =()=>{
  
  let searchInput = document.getElementById('searchInput')
  let searchValue = searchInput.value.toLowerCase()
  let searchParent = document.getElementById('searchParent')
  searchParent.replaceChildren()
  //console.log()
  
  PRODUCTS.forEach((product)=>{
    let searchArr = searchValue.split(' ')
    let nameArr = product.name.toLowerCase().split(' ')
    let descArr = product.description.toLowerCase().split(' ')
    //let tags = product.tags
    
    let isExistName = searchArr.some((element)=>nameArr.includes(element))
    let isExistDesc = searchArr.some((element)=>descArr.includes(element))
    //let isExistTags = searchArr.some((element)=>tags.includes(element))
    
    if(isExistName || isExistDesc /*|| isExistTags*/){
      console.log(product._id, product.name, 'hello world')
      CREATE_CARD(product, searchParent)
    }
    else{
      console.log(product._id ,product.name,  'match does not exist')
    }
  })
}



PRODUCTS.forEach((product)=>{
  let MAIN_PARENT = document.getElementById('mainParent')
  CREATE_CARD(product, mainParent)
})

let btnSearch = document.getElementById('btnSearch')
let searchInput = document.getElementById('searchInput')
let MAIN_PARENT = document.getElementById('mainParent')
let btnCancel = document.getElementById('btnCancel')


btnSearch.addEventListener('click', ()=>{
  MAIN_PARENT.style.display = 'none'
  searchParent.style.display = 'flex'
  SEARCH()
})
searchInput.addEventListener('input', ()=>{
  MAIN_PARENT.style.display = 'none'
  searchParent.style.display = 'flex'
})
btnCancel.addEventListener('click', ()=>{
  MAIN_PARENT.style.display = 'flex'
  searchParent.style.display = 'none'
})


