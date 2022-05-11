let json;
let mainContainer = document.getElementById('photos');

async function retrieveRespone(){
    let response = await fetch('https://api.unsplash.com/photos/?client_id=AV2FBvMHbPNmjVXoCCWQt6y8-kopy4fhmDDTEkl56WI');

    if(response.ok) {
        json = await response.json();
        console.log(json);

        // if we got a response then show them.
        json.forEach( (item, index) => { // iterate through each item
            let container = document.createElement('div');
            container.classList.add('item')
            container.classList.add('item-' + index);

            let imgDiv = document.createElement('div');
            imgDiv.classList.add('the_photo');
            imgDiv.style.backgroundImage = "url('" + item.urls.small + "')";

            let likes = document.createElement('p');
            likes.classList.add('likes');
            likes.textContent = item.likes + ' 🤙🏽';

            let usernamePara = document.createElement('p');
            usernamePara.textContent = 'By ';

            let usernameHyperlink = document.createElement('a');
            usernameHyperlink.href = item.user.links.html;
            usernameHyperlink.textContent = item.user.username;
            usernamePara.appendChild(usernameHyperlink);

            let bioPara = document.createElement('p');
            bioPara.textContent = item.user.bio;

            let contentDiv = document.createElement('div');
            contentDiv.classList.add('item_content');
            contentDiv.appendChild( likes )
            contentDiv.appendChild( usernamePara )
            contentDiv.appendChild( bioPara )


            container.appendChild(imgDiv);
            container.appendChild(contentDiv);
            mainContainer.appendChild(container);
        })

    } else {
        console.log("http-error: " + response.status);
    }
}

retrieveRespone();