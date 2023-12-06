(() => {
  const main_content = document.querySelector(".image")
  const thumbnails = document.querySelectorAll(".thumbnail")
  let current_image = 0

  const changeImage = (thumbnail) => {
    main_content.src = thumbnail.src

    const active = document.querySelector(".active")
    active.classList.toggle("active")
    thumbnail.classList.add("active")
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.onclick = event => {
      changeImage(thumbnail)
      current_image = index
    }
  })

  setInterval(() => {
    if(current_image > thumbnails.length - 1) current_image = 0

    changeImage(thumbnails[current_image])
    current_image++
  }, 1000)
})()