<!-- 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**? -->

ANSWER:

[i.] About getElementById("idName")====> This is found  by its id and this can be use for only one time.
Viz: document.getElementById("title") → will give the element with id="title".

[ii.]About getElementsByClassName("className")===> This is found by its class and this can be us for many elements which have the same class.
viz: document.getElementsByClassName("card") →it will give all elements with class="card".


[iii.] About querySelector("cssSelector")===> This is found by id or class.Both are used for this.This is finding only the first element that matches with the css selector.
viz: document.querySelector(".card") →it will give  only the first card.

[iv.] About querySelectorAll("cssSelector")===> It finds all elements (like getElementsByClassName) that matches a css selector.
viz:document.querySelectorAll(".card") → all cards.

<!-- *******************************************************  -->

<!-- 2. How do you **create and insert a new element into the DOM**? -->

ANSWER:


[i]. Firstly use document.createElement("tag-Name")
[ii]. Secondly use .innerText or .innerHTML
[iii]. Thirdly use .appendChild() or .append()

<!-- *******************************************************  -->


<!-- 3. What is **Event Bubbling** and how does it work? -->

ANSWER:

         Event Bubbling means when i clicked on a child element, the event also goes upwards to its parent, then that's parent, and this is go on .


<!-- *******************************************************  -->

<!-- 4. What is **Event Delegation** in JavaScript? Why is it useful? -->

ANSWER:  Event Delegation puts one event on the parent so that it can control all the children .That saves code,do it  faster and make it easy so much.

<!-- Why is it useful? -->

i.  Saves code.
ii. Better performance.
iii.Saves time.
iv. Do it faster.
v.  Make it easy.


<!-- *******************************************************  -->


<!-- 5. What is the difference between **preventDefault() and stopPropagation()** methods? -->


Answer:  preventDefault()===> It  stops the  default action of browser.

stopPropagation()===> It stops  from going to parent elements of the event.


