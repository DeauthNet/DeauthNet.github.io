function createBox(title, message) {
    newBox.className = "box";
    
    var newBox = document.createElement('div');
    var titleElement = document.createElement('h2');
    var messageElement = document.createElement('p');

    newBox.id = title;
    titleElement.textContent = title;
    messageElement.textContent = message;

    newBox.appendChild(titleElement);
    newBox.appendChild(messageElement);

    document.body.appendChild(newBox);
}
