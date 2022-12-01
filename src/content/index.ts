
async function init() {
  const player = await setPlayer()

  window.addEventListener("keypress", (e ) => {
    switch (e.code) {
      case "Space" :
        player.paused ? player.play() : player.pause()
        break
      case "KeyF":
        player.currentTime+=10
        break
      case "KeyB":
        player.currentTime-=10
        break
      default :

    }
  })

  console.info('Ocs Keyboard Extension Launched successfully !')

}


init()


function setPlayer() : Promise<HTMLVideoElement> {
  return  new Promise((resolve) => {
    let player = undefined
    function lookForPlayer() : void {
      player = document.querySelector(".shaka-video") as HTMLVideoElement
      if(!player) {
        setTimeout(lookForPlayer, 1000)
        return
      }
      resolve(player)
    }
    lookForPlayer()
  })

}


export {}
