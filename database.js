export const PRODUCTS = [
  {
    _id: "ELE20240821004",
    name: "Smartwatch Pro",
    description: "A sleek smartwatch with advanced features",
    sizes: ["small", "medium", "large"],
    createdAt: "08/21/2024",
    inStock: true,
    price: 17999,
    discount: 15
  },
  {
    _id: "FAS20240821005",
    name: "Summer Dress",
    description: "A stylish dress perfect for summer",
    sizes: ["xs", "s", "m", "l", "xl"],
    createdAt: "08/21/2024",
    inStock: false,
    price: 2499,
    discount: 25
  },
  {
    _id: "TEL20240821006",
    name: "Gaming Phone",
    description: "A high-performance phone for gamers",
    sizes: ["standard"],
    createdAt: "08/21/2024",
    inStock: true,
    price: 6899,
    discount: 10
  },
  {
    _id: "COM20240821007",
    name: "Wireless Keyboard",
    description: "A compact wireless keyboard for convenience",
    sizes: ["standard"],
    createdAt: "08/21/2024",
    inStock: true,
    price: 9599,
    discount: 5
  },
  {
    _id: "HOM20240821008",
    name: "Smart Speaker",
    description: "A smart speaker for home entertainment",
    sizes: ["small", "large"],
    createdAt: "08/21/2024",
    inStock: false,
    price: 1099,
    discount: 20
  },
  {
    _id: "SPO20240821009",
    name: "Fitness Tracker",
    description: "A fitness tracker for monitoring progress",
    sizes: ["small", "large"],
    createdAt: "08/21/2024",
    inStock: true,
    price: 3499,
    discount: 15
  },
  {
    _id: "GAM20240821010",
    name: "Gaming Console",
    description: "A high-performance gaming console",
    sizes: ["standard"],
    createdAt: "08/21/2024",
    inStock: false,
    price: 2399.99,
    discount: 25
  },
  {
    _id: "EDI20240821011",
    name: "E-learning Software",
    description: "A comprehensive e-learning software",
    sizes: ["standard"],
    createdAt: "08/21/2024",
    inStock: true,
    price: 200,
    discount: 10
  },
  {
    _id: "MUS20240821012",
    name: "Wireless Headphone",
    description: "Wireless headphones for music lovers",
    sizes: ["small", "large"],
    createdAt: "08/21/2024",
    inStock: true,
    price: 4000,
    discount: 20
  },
  {
    _id: "PRO20240821013",
    name: "Productivity Software",
    description: "A software for boosting productivity",
    sizes: ["standard"],
    createdAt: "08/21/2024",
    inStock: false,
    price: 1500,
    discount: 15
  }
]

export const SEARCH =()=>{
  searchResults.replaceChildren();
  
  let searchHeading = document.createElement('h2');
  searchHeading.classList.add('search-heading', 'display-4')
  searchResults.append(searchHeading)
  
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
      CREATE_CARD(element, searchResults)
      }
      
  else{
    console.log(element.name+" does not exist")
    //document.write('404 not found')
    //searchHeading.textContent = "No Results"
    }
})
}