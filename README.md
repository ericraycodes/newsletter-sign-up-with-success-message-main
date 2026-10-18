# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/ericraycodes/newsletter-sign-up-with-success-message-main/tree/main](https://github.com/ericraycodes/newsletter-sign-up-with-success-message-main/tree/main)
- Live Site URL: [https://ericraycodes.github.io/newsletter-sign-up-with-success-message-main](https://ericraycodes.github.io/newsletter-sign-up-with-success-message-main)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to CSS style over a browser's autofill since it forces its own *background-color* and *color* properties with *!important*.
```css
.user-email-input:-webkit-autofill {
    /* box-shadow style over the background-color */
    box-shadow: 0 0 0 20rem hsl(4, 100%, 97%) inset;
    /* vendor style over color property */
    -webkit-text-fill-color: $Red;
  }
```

I learned that not all User Agents are similar in responding to styles. Some of the popular browsers do not apply CSS styles on `:active` pseudoclass when they should. **Everything should be tested across browsers from the start.**

I realized that **semantic markup** is the start to efficient project schedule. When I was unsure and changing my HTML structure the CSS will have to adjust as well.

### Continued development

- Mobile-First Design
- JavaScript

## Author

- Frontend Mentor - [@ericraycodes](https://www.frontendmentor.io/profile/ericraycodes)
- GitHub - [ericraycodes](https://github.com/ericraycodes)
