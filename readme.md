1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   Answer:
   1.getElementById: It finds one element which has an Id and returns an element.
   2.getElementsByClassName: It finds all elements which have same class and return a HTMLCollection which is live.
   3.querySelector: It works like an id but it takes CSS selectors and finds the first matched element and returns that one element.
   4.querySelectorAll: It works like getElementsByClassName but returns a NodeList.

2. How do you **create and insert a new element into the DOM**?
   Answer:
   first, we have to create a parent element (document.createElement('div')) and a child element (document.createElement('p')) after that we have to append that child into the parent element like this (div.appendChild(p))

3. What is **Event Bubbling** and how does it work?
   Answer:
   In HTML every element is a box. HTML is the main visible box in a document. first of all there are two elements which are Head and body.if i create a div inside the body tag so i can explain it like this way if i clicks the div that's mean i click all of them for it's upward behavior.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Answer:
   Event Delegation reduces addEventListener. It is used in the parent so every child gets the event inside the parent.
   It is useful because it reduces events and make the site faster.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   preventDefault() is used to stop browser's default behavior like form submit and link open etc. on the other hand stopPropagation() is used to stopped event bubbling to parent element.
