/*Lesson Task 2 Questions

Question 1

Select the h3 element and change its value to Hello instead of Welcome.

Question 2

Select all the h4 elements on the page and change their margin-bottom style to -20px.

Question 3

Set the background colour of the second h4 element to red.

Question 4

Set the font size of the first paragraph element on the page to 24px and its color to blue.

Question 5

Add span tags around the content of the third paragraph element on the page.

Question 6

Add a new paragraph to the div with a class of content. Add the paragraph after the others.

Question 7

Add a new class called content-item to each paragraph in the div with a class of content.

Question 8

Select the ul element on the page by its id and add a new list item to the beginning of the list.

Question 9

Programmatically remove the class from the ul element.

Question 10

Hide the element with the id of hide.*/

//Q1
const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";
firstHeading.style.color = "green";
//firstHeading.style.marginBottom = "100px" just to test the  style.margin

//Q2
const underHeadings = document.querySelectorAll("h4");
console.log(underHeadings);

for (let i = 0; i < underHeadings.length; i++) {
    console.log(underHeadings[i].style.marginBottom = "-20px")
}

//underHeadings.innerHTML = "this is a test";
//firstHeading.style.colour = "blue"
//.margin-bottom = "-20px";
// do I have to loop it because it is going trough several elements? YES!!!


//Q3

//document.querySelector(".two");
underHeadings[1].style.background = "red";


//Q4

const paragraphOne = document.querySelector(".section.one");
paragraphOne.style.fontSize = "24px";
paragraphOne.style.color = "blue";

//console.log(document.querySelector = "h3");
//I think I HAVE to daclare? the element I want with a variable name in order to slect the element?
//Do I first have to make the element I want a valid selector?
//i want to select it by its class but how, i forgot teh backticks!


//Q5

const paragraphThree = document.querySelector(".section.three");
//paragraphThree.style.color = "aqua" ...just to test if the element is a valid selector

//paragraphThree.innerHTML = "<span>" + paragraphThree.innerHTML + "</span>";

paragraphThree.innerHTML = `<span>${paragraphThree.innerHTML}</span>`;

//Do I have to add span "manually" in the html? no, should be doable in js
//why are neither of these working :(

//fra fasiten:

//const thirdParagraph = document.querySelector(".section.three");
//thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "</span>";

// or
// thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span>`;

// I didn't know that I should put innerHTML after the = aswell :D


//Q6 
//Add a new paragraph to the div with a class of content. Add the paragraph after the others.
//like where they add elephant to the listed items?
const divBox = document.querySelector (".content");
//console.log(divBox.innerhtml);
divBox.innerHTML = divBox.innerHTML + "<p>new paragraph</p>";
console.log(divBox.innerHTML);

//or
//content.innerHTML += "<p>Another paragraph</p>";
// += means keep the current value, AND include this new value

//Q7
// se video fra ca 18 min
//Add a new class called content-item to each paragraph in the div with a class of content.

//use loop?
//for (i = 0; i < divBox.length; i++) {
   // divBox.p = classof (content-item)
//}

const boxParagraphs = document.querySelectorAll(".content p");
//boxParagraphs.style.color = "red";
//boxParagraphs.className = "firstPOfBox";
console.log(boxParagraphs);
for (let i = 0; i < boxParagraphs.length; i++) {
    console.log(boxParagraphs[i].className = "content-item");
}

//could also have used classList.add

// IT WORKED! when console logging the variable name all the <p>s show up in an array! now I can loop trough it :D
// I am able to select the first p, but not if using All selector?
// I was able to set a class for the first <p>
//I tried to make it a selector by class and tag, but not working
//madeClass.className = "content-item";
//divBox.p.className = "content-item"; 

//so I magaged to attach classes to the <p>s, but now they are green and capiytal?
//OH the class already had styling in the .css :D 


//Q8
// Select the ul element on the page by its id, and add a new list item to the beginning of the list.

const ulElement = document.querySelector ("#services");

console.log(ulElement);

//const liItems = document.querySelectorAll ("#services li")
//console.log (liItems);

ulElement.innerHTML = "<li> new item to list </li>" + ulElement.innerHTML;

//ulElemen<li> new item to list </li>
// So appearently you have to use the parent of the list to add to the list, i forgot



//Q9
//Programmatically remove the class from the ul element.

ulElement.classList.remove ("service-list");

//dont need dot in front of class name, bc you alredy stated its a class

//Q10
//Hide the element with the id of hide.

const hiding = document.querySelector ("#hide");
hiding.style.display = "none";

// almost figured it out by myself, but w some help from google I finished !!!









