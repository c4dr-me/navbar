# Responsive Router Navbar with Material UI

This project provides a responsive router navbar built with Material UI. It is designed to be mobile-friendly and adapts to different screen sizes. Below we have the screenshot for mobile view, it works for other viewports as well.

![Navbar](./images/Navbar.png)

## Features

- Responsive design: The navbar adapts to different screen sizes, providing an optimal user experience on both desktop and mobile devices.
- Routing: Integrated with React Router for seamless navigation.
- Material UI: Built with Material UI for a modern, clean aesthetic.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/yourproject.git
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to view the app.

## Usage

Click on the different links in the navbar to navigate between pages. On smaller screens, the navbar collapses into a hamburger menu for easier navigation with drawer/sidebar.

## Customizing the Navbar

If you want to customize the navbar, such as changing the styling or adding/removing pages, you should modify the `Navbar.jsx` file. This file contains comments that guide you on where and how to make these changes.

For example, to add a new page to the navbar, you would add a new object to the `pages` array in `Navbar.jsx`. Each object in the `pages` array represents a page in the navbar, with a `name` property (the text that will be displayed in the navbar) and a `path` property (the URL path for the page).

To change the styling of the navbar, you can modify the styles applied to the `AppBar` component and other components within `Navbar.jsx`.

Always remember to test your changes locally before pushing them to ensure that the navbar still functions as expected.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT-License](LICENSE)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
