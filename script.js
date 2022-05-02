(function () {

    "use strict";

    const destinationForm = document.querySelector('#destinationDetails');

    destinationForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const name = event.target.elements['destinationName'].value;
        const location = event.target.elements['destinationLocation'].value;
        const photo = event.target.elements['destinationPhoto'].value;
        const description = event.target.elements['destinationDescription'].value;

        for (let i = 0; i < destinationForm.length; ++i) {
            destinationForm.elements[i].value = '';
        }

        const destCard = createDestinationCard(name, location, photo, description);

        const wishListContainer = document.getElementById('destinationContainer');
        if (wishListContainer.children.length === 0) {
            document.querySelector('#title').innerHTML = "My WishList";
        }

        document.querySelector('#destinationContainer').appendChild(destCard);

    }

    function createDestinationCard(name, location, photo, description) {
        const card = document.createElement('div');
        card.className = "card";

        const img = document.createElement('img');
        img.setAttribute('alt', name);

        if (photo.length === 0) {
            img.setAttribute('src', 'images/signpost.jpg');
        }
        else {
            img.setAttribute('src', photo);
        }
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = "cardBody";

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardLocation = document.createElement('h4');
        cardLocation.innerText = location;
        cardBody.appendChild(cardLocation);

        if (description.length !== 0) {
            const cardDesc = document.createElement('p');
            cardDesc.className = 'cardText';
            cardDesc.innerText = description;
            cardBody.appendChild(cardDesc);
        }

        const cardDeleteButton = document.createElement('button');
        cardDeleteButton.innerText = "Remove";

        cardDeleteButton.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteButton);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();
    }
})();

