1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
--> getElementById selects the element of a specific id while getElementsByClassName returns a collection of an element that has the specific
    class, querySelector returns the first element that matches a selector while querySelectorAll returns all the elements.


2. How do you **create and insert a new element into the DOM**?
--> We have to use createElement() to create the elem and then add it to the DOM by appendChild()


3. What is **Event Bubbling** and how does it work?
--> When an event is triggered on an element, the event is fired on that said element and then keeps goin up the hierarchy. Basically it propagates
    up the DOM tree.


4. What is **Event Delegation** in JavaScript? Why is it useful?
--> Attaching an event listener to the parent elem instead of the child elem to handle all the child elem events. If a new child is created it also
    has the event listener attached by default.


6. What is the difference between **preventDefault() and stopPropagation()** methods?
--> preventDefault() prevents the default event while stopPropagation() prevents event bubbling.

