let arr = []
let container = document.querySelector('.container')
let modalImg = document.querySelector('#modal-img')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal-bg')
let closeIcon = document.querySelector('.close-icon')

fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res => res.json())
     .then(data => reload(data))

     function reload(arr) {
        console.log(arr);

        for (const item of arr) {
            let img =  document.createElement('img')

            img.src = item.thumbnailUrl


            img.onclick = () => {
               modalImg.src = item.thumbnailUrl
               modal.style.display = 'block'
               modalBg.style.display = 'block'
            }

            closeIcon.onclick = () => {
               modal.style.display = 'none'
               modalBg.style.display = 'none'
            }
            

            container.append(img)
        }
        
     }