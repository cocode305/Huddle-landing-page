# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/screenshot.png)

Crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Solution URL](https://github.com/cocode305/Huddle-landing-page.git)
- Live Site URL: [Live Site URL](https://cocode305.github.io/Huddle-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS Utility Classes
- Flexbox
- Mobile-first workflow

### What I learned

- I had to learn how to define my own custom breakpoints, colors and font family.

- I also learnt to use @apply to create reusable classes to reduce filling my HTML with too much class utilities.

- I learned to use arbitrary values for the shadow utility class.

### Challenge 1

// Background Image File Path
- I encountered some challenges using bg-[url('')] to add a background image to the project.

### How I solved it

Turns out the file path was wrong and the images names weren't correct. Everything worked fine after I made the right changes.

### Challenge 2

- I couldn't get the order of the third card right. I wanted the image to come first on mobile screens then on wider screens, the text first.

#### How I solved it

- When I used the order utility class, I only added it to the image container, that didn't give me the result I wanted, so I tried adding the order class to the card content to and it worked fine.

### Useful resources

- Chatgpt
- [Tailwind CSS Doc](https://tailwindcss.com/) - This helped me learn the utility classes I needed for this challenge
- [Box Shadow Generato](https://html-css-js.com/css/generator/box-shadow/) - Helped me get quick box shadow properties

## Author

- Website - [Collins Eneluwe](https://www.your-site.com)
- Frontend Mentor - [@cocode305](https://www.frontendmentor.io/profile/cocode305)
- Twitter - [@xo_co_co](https://x.com/xo_co_co)
