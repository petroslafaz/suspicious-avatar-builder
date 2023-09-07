# Suspicious Avatar Builder Prototype

## About

Suspicious is a simple prototype designed to explore the software architecture behind 2d avatar builders. The project employs a blocky design approach, making it a good resource for teaching coding concepts.

[View Live Prototype](https://csb-vdhnlk-g43uic7c4-pyson.vercel.app/)

## Structure

The avatar builder is organized into several key components:

- **Sections**: These are broad categories such as Body, Clothes, etc.
- **Categories**: Sub-sections within each section (e.g., Bottoms, Tops, Footwear within Clothes).
- **Parts**: These are specific items within categories (e.g., Trousers, Skirt).
- **Layers**: Some parts have multiple layers, like front and back layers for shirts and hair.
- **SVG**: All avatar parts are SVG-based.
- **Palettes**: Each category has its specific color palette (e.g., hair palette).
- **Color Library**: Internally, the app maintains a comprehensive library of colors in various shades.

## Technical Overview

The project is built with React and TypeScript:

- `App.tsx`: Acts as the main entry point and outlines the application layout. Responsible for rendering `Avatar`, `Palette`, and `Tabs`.
- `AvatarContext.tsx`: A React context for managing the avatar builder's state. Includes a `useAvatar` hook for easy state management.
- `Palette.tsx`, `Tabs.tsx`: These components render the palette and tabs UI, sourcing data from `AvatarContext` via the `useAvatar` hook.
- `Avatar.tsx`, `AvatarParts.tsx`: The core components for rendering the avatar. `AvatarParts` contains the actual SVG elements (exported from Figma), while `Avatar` manages the rendering logic, including ordering and layering.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
