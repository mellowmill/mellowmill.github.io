# Claude Code Reference Document

This document serves as a reference for Claude Code when working on this project.

## Project Overview
This appears to be a GitHub Pages website for mellowmill.github.io with a simple HTML structure and CSS styling.

## Core UX Principles
- We are aiming for a simple, clean and effecient style
- We are basing this on Swiss design principles
- But we are amending to feel a bit more personal, e.g. slightly rounded corners
- We should use animation to make it feel alive

## File Structure
- `index.html` - Main website content
- `style.css` - Styling for the website
- `CNAME` - Custom domain configuration for GitHub Pages

## Development Notes
- This is a static website hosted on GitHub Pages
- The site uses standard HTML/CSS without any build process
- Changes are deployed automatically when pushed to the main branch
- Hero section fills full viewport height (100vh) for initial impact
- Smooth scrolling behavior implemented for navigation

## Common Tasks
- When making changes to styling, edit `style.css`
- When updating content, edit `index.html`
- Always test changes locally before committing
- Use semantic HTML and maintain accessibility standards
- Add ID attributes to sections for navigation linking

## Git Workflow
- Main branch: `main`
- Current working branch: `develop`
- Recent commits show work on pricing section and Swiss/Scandinavian design themes

## Modified Files (as of conversation start)
- `index.html` - Has uncommitted changes
- `style.css` - Has uncommitted changes

## Colors
- Background: #FAF9F6
- Main: #80C293
- Dark background: #544f51
- Secondary: #7da2d0
- Section alternative: #f0efeb

## Color Usage Rules
- Always use the dark background color (#544f51) for text on primary color backgrounds
- This ensures better contrast and readability than white text on green
- Apply this rule to all buttons, cards, and elements with primary color backgrounds
- Use dark background color (#544f51) for section borders and footer background
- CTA and footer sections should not have rounded corners for a cleaner look

## Layout Structure
- Header: Fixed position with transparent background and backdrop blur
- Hero: Full viewport height (100vh) with centered content
- Features: Alternate background color with top/bottom borders
- Pricing: White background with subtle borders using alternate color
- CTA: Alternate background color with top border
- Footer: Dark background color with light text

## Navigation
- Header contains logo, navigation menu (Features, Pricing), and CTA button
- Navigation uses smooth scrolling to sections
- All sections have ID attributes for anchor linking