# LaundryMart Web Application

A responsive laundry-service landing page built using **HTML and CSS**.

## Project Structure

```text
Task5/
├── index.html
├── style.css
└── README.md
```

## Features

- Navigation bar with:
  - LaundryMart logo
  - Home
  - Services
  - About Us
  - Contact Us
  - User name on the right
- Laundry-service hero/video-style section with:
  - Left content area
  - Service description
  - "Book Service Today" button
  - Right-side laundry image
- Viewport-based sizing using `vh`, `vw`, and `clamp()`.
- Designed so the desktop hero section fits within the viewport without page scrolling.
- Responsive layout for smaller screens.
- CSS is correctly linked to the HTML using:
  `<link rel="stylesheet" href="style.css">`

## Important Requirement

Flexbox is **not used** in this implementation.

The navigation and two-column hero layout are created using:

- `display: inline-block`
- `display: block`
- `vertical-align`
- `width`
- `height`
- `position`
- `vh` / `vw`
- `clamp()`

## How to Run

1. Open `index.html` in a browser.

## Image

The hero image is loaded from Unsplash using a remote image URL. No additional image file is required.
