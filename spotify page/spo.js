console.log("hello world")
async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/c:/Users/himan/Desktop/mini%20project/online/spotifyc/code/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }
    return songs
}

async function main() {
    //all list

    let songs = await getsongs()
    console.log(songs)

    //firstlist
    var audio = new Audio('songs[1]');
    audio.play();

}
main()