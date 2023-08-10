// let promise = new Promise(function(resolve, reject){
//     // Ejecutor (el codigo productor, el cantante)
//     // setTimeout(() => resolve("hecho"),1000);
//     setTimeout(() => reject(new Error("Ooops")), 1000);
// });

// promise.then(
//     result => alert(result),
//     error => alert(error)
// )

// promise.catch(alert)

async function showAvatar() {
    let response = await fetch('assets/data/user.json');
    let user = await response.json();

    console.log(user);

    let gitHubResponse= await fetch(`https://api.github.com/users/${user.username}`);
    let gitHubUser = await gitHubResponse.json();

    console.log(gitHubUser);

    let img = document.createElement('img');
    img.src = gitHubUser.avatar_url;
    document.body.append(img);
}

showAvatar();