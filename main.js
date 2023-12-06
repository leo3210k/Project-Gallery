(() => {
  const main_content = document.querySelector(".image")
  const thumbnails = document.querySelectorAll(".thumbnail")
  let current_image = 0

  main_content.src = thumbnails[0].src
  console.log(thumbnails)

  thumbnails.forEach((thumbnail) => {
    thumbnail.onclick = event => {
      main_content.src = thumbnail.src
    }
  })

  setInterval(() => {
    if(current_image > 3) current_image = 0

    main_content.src = thumbnails[current_image].src
    current_image++
  }, 1000)
})()