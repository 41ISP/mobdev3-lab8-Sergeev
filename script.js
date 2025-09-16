const  trackContainer = document.querySelector(".tracks-list")


async function fetchData() {
    const data = await fetch('https://kitek.ktkv.dev/songs.json')
    const json = await data.json()
    for (let i = 0; i < json.length; i++) {

        const songLi = document.createElement("li")
        songLi.classList.add("track-item")

        const songNumber = document.createElement("div")
        songNumber.classList.add("track-number")
        songNumber.textContent = i + 1
        songLi.appendChild(songNumber)

        // const spanSong = document.createElement("span")
        // spanSong.textContent = json[i].title
        
        
        const songPicture = document.createElement("img")
        songPicture.classList.add("album-art")
        songPicture.src = json[i].track.album.images[0].url
        songLi.appendChild(songPicture)

        
        
        trackContainer.appendChild(songLi)
    }
}
fetchData()
