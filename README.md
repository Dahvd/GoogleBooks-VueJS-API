# assignment2
# Group 17 David and Fernando


# Part 1 - Google Books Web App with Vue.js
The Vue App contains the functionality to search through books while displaying 20 books per page.  Upon clicking the next button, 
each page will display 20 new books until there are no more books to be displayed.  Any part of the book that is undefined will not be displayed.

A tmeplate for each book is used which comes from the component located in bookDisplay.js
Additional data fields for the book (the description and the page count) are also listed.


The vue app is defined in main.js with the bookDisplay component located in the components folder.

# Part 2 - Adding validation to the social media website

Javascript was used to add client side signup validation to the websites signup page.

The validation takes place in the validateForm function in the signup.js files.  This function checks to makes sure the password and confirm 
password fields are the same, makes sure that the password has necessary characters (lowercase, uppercase, and a letter), and makes sure that 
there are no invalid chacters used anywhere in the signup.

There is also a function updateSecurityQ which displays the input box to type the security questions answer after the security question is answered.