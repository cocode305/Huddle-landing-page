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
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

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
- I had to learn how to set up my own custom breakpoints, colors and font family.

- I also learnt to use @apply to create reusable classes to reduce filling my HTML with too much class utilities.

### Challenge 1
// Background Image File Path
- I encountered some challenges using bg-[url('')] to add a background image to the project, had to use Chatgpt to troubleshoot why it wasn't working. Turns out the file path wasn't correct and though gpt gave options to use a config file, I settled for using a custom class to define the background images instead.

#### How I solved it


### Challenge 2
- I couldn't get the order of the third card right. I wanted the image to come first on mobile screens then on wider screens, the text first.

#### How I solved it
- When I used the order utility class, I only added it to the image container, that didn't give me the result I wanted, so I tried adding the order class to the card content to and it worked fine.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- Chatgpt
- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Collins Eneluwe](https://www.your-site.com)
- Frontend Mentor - [@cocode305](https://www.frontendmentor.io/profile/cocode305)
- Twitter - [@xo_co_co](https://x.com/xo_co_co)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
