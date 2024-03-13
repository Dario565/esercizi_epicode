


const fetchMusic = (query, id) => {
    const section = document.querySelector(`#${id}`)

    const row = document.querySelector(`#${id}Section`)
    console.log(row)
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=gunsroses" 
      
    )
      .then((raw) => {
        return raw.json()
      })
      .then((res) => {
        let music = res.data
        section.classList.remove("d-none")
        for (let i = 0; i < music.slice(0, 4).length; i++) {
          const element = music[i]
          row.innerHTML += `<div class='col col-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`
        }
      })
      .catch((err) => console.log(err))
  }


 
  const fetchMusic2 = (query, id) => {
    const section = document.querySelector(`#${id}`)

    const row = document.querySelector(`#${id}Section`)
    console.log(row)
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem" 
      
    )
      .then((raw) => {
        return raw.json()
      })
      .then((res) => {
        let music = res.data
        section.classList.remove("d-none")
        for (let i = 0; i < music.slice(0, 4).length; i++) {
          const element = music[i]
          row.innerHTML += `<div class='col col-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`
        }
      })
      .catch((err) => console.log(err))
  }


 

  
  const fetchMusic3 = (query, id) => {
    const section = document.querySelector(`#${id}`)

    const row = document.querySelector(`#${id}Section`)
    console.log(row)
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen" 
      
    )
      .then((raw) => {
        return raw.json()
      })
      .then((res) => {
        let music = res.data
        section.classList.remove("d-none")
        for (let i = 0; i < music.slice(0, 4).length; i++) {
          const element = music[i]
          row.innerHTML += `<div class='col col-3'> <img class='w-100' src='${element.album.cover_xl}'/> </div>`
        }
      })
      .catch((err) => console.log(err))
  }

  
  

  
    
    window.onload = () => {
    fetchMusic2("eminem", "eminem")
    fetchMusic3("queen", "queen")
    fetchMusic("metallica", "metallica")
    

    

  }
  
  