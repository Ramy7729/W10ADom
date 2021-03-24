// The querySelector is returning only the first element as specified.
var h1Tag = document.querySelector(`h1`);
h1Tag.style.backgroundColor = `#b3cde0`;

// The querySelector is returning all the p tags using the for loop and changing the color of the background
var pTags = document.querySelectorAll(`p`);
for (var i=0; i < pTags.length; i++) {
    pTags[i].style.color = `#03396C`;
    pTags[i].style.fontSize = `1.3em`;
}

// The getElementById is returning the element with the id attribute that is set to pText.
var idPtag = document.getElementById(`pText`);
pText.innerText = `DOM DOM DOM!!!`;

// The getElementsByClassName is returning all elements with the class attribute that is set to textWidth.
var pWidth = document.getElementsByClassName(`textWidth`);
for (var i=0; i < pWidth.length; i++) {
    pWidth[i].style.width = `50%`;
}

// The getElementsByTagName is returning all elements with the img tag.
var imgMargin = document.getElementsByTagName(`img`);
for (var i=0; i < imgMargin.length; i++) {
    imgMargin[i].style.width = `30%`;
    imgMargin[i].style.border = `solid 5px #03396C`;
}
// Created a new element (p tag) with the createElement method.
// The newly created element is inserted into the selected div tag, which is the parent and placed as the last child.
// This p tag will appear after the second img tag in the div.
var newElement = document.createElement(`p`);
newElement.innerText = `Hello I am a new paragraph created by the createElement. Testing 1 2 3 4 5 6 7`;
var div = document.querySelector(`div`);
div.append(newElement);

// A text node is created which gets appended to the div tag.
var tNode = document.createTextNode(`Hello I am a textNode`);
div.append(tNode);

// This is removing a child element in the div tag as specified.
// The p tag with an index of 0 is removed.
div.removeChild(pWidth[0]);

// The class of bkgColor is used for the following three examples.

// The div tag is targeted with the classList.add method to give it a class that is set to bkgColor and changes the background color.
div.classList.add(`bkgColor`);
// The class is removed with the classList.remove method and the background color is gone.
div.classList.remove(`bkgColor`);
// However, the class will re-appear using the classlist.toggle method.
div.classList.toggle('bkgColor');