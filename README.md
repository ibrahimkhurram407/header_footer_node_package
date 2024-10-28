# header_footer_node_package

A simple Node package for reusable `Header` and `Footer` components, plus more! This package is ideal for adding consistent headers, footers, and other UI elements to your project.

## Installation

Install the package via npm:

```
npm i header_footer_node_package
```

## Usage

After installation, import the components you need:

```
import { Header, Footer, OtherComponent } from 'header_footer_node_package';
```

### Example

Use the components in your project like so:

```
<Header
  title="Welcome to My Site"
  links={[
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
    { href: '/test', text: 'Test' },
  ]}
/>
<Footer copyrightText="© 2024 My Company" />
```

Each component accepts unique parameters. Customize them as needed for your application!

## Adding New Components

To add more components to this package:

1. Open the `src` folder.
2. Create a new component file.
3. Import it in `./src/index.ts`.
4. Add it to the export dictionary in `./src/index.ts`:

```
export { Header, Footer, OtherComponent };
```

## Building and Publishing

To build and publish the package:

1. Run the following command to bundle the package:

   ```
   npm run rollup
   ```

2. Update the `version` field in `package.json` as necessary.
3. Publish the package with:

   ```
   npm publish
   ```

### Note

When upgrading the package version, consider deleting the `node_modules` folder to ensure you get the latest package version after reinstallation.