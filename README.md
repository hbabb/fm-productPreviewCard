# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
    - [Table of contents](#table-of-contents)
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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![preview](./public/desktop-preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/hbabb/fm-productPreviewCard)
- Live Site URL: [GitHub Pages](https://hbabb.github.io/fm-productPreviewCard)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [SCSS](https://sass-lang.com/) - For styles
- BEM methodology

### What I learned

During this project, I focused on implementing a clean component structure using BEM methodology in SCSS. I organized my styles modularly by separating the reset, variables, and utility classes into their own files.

I'm particularly proud of my responsive image handling, which switches between desktop and mobile versions based on screen size:

```html
<picture className="product-card__image">
    <source srcset="{DesktopProduct}" media="(min-width: 40rem)" />
    <img src="{MobileProduct}" alt="Product" />
</picture>
```

The BEM methodology helped me create maintainable CSS with clear parent-child relationships:

```scss
.product-card {
    &__content {
        // Content styles
    }

    &__button {
        // Button styles

        &:hover {
            // Hover state
        }
    }
}
```

### Continued development

In future projects, I'd like to further explore:

- TypeScript integration for component props
- Creating more reusable components
- Implementing better accessibility practices
- Exploring animation and microinteractions

### Useful resources

- [BEM Methodology](https://getbem.com/) - This helped me structure my CSS in a more maintainable way.
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is an amazing article that helped me understand Flexbox layout.
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - This helped me implement CSS custom properties for a more maintainable design system.

## Author

- Frontend Mentor - [@hbabb](https://www.frontendmentor.io/profile/hbabb)
- GitHub - [@hbabb](https://www.github.com/hbabb)
- X - [@heath2420](https://www.x.com/heath2420)
- LinkedIn - [@heath-babb](https://linkedin.com/in/heath-babb)

## Acknowledgments

I'd like to thank the Frontend Mentor community for their feedback and support. The challenge has helped me improve my component design skills and CSS organization.
