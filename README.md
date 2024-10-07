# LazyComponent

LazyComponent is a simple and efficient Svelte component for lazy-loading other components in your Svelte applications. It uses IntersectionObserver to load components only when they are about to enter the viewport, improving your app's performance by reducing initial load times and network requests.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Efficient lazy loading**: Only loads the component when it's about to appear in the viewport.
- **IntersectionObserver-based**: No need to manually calculate scroll positions.
- **Plug-and-play**: Easy to use and integrate with any Svelte project.
- **Customizable**: Provides options to control loading behavior and fallbacks.

## Installation

```bash
npx jsr add @jhenbert/svelte-lazy-component
```

## Usage

Provide a custom fallback to be displayed while the component is loading:

```svelte
<script>
  import LazyComponent from '@jhenbert/svelte-lazy-component';
</script>

<LazyComponent this={() => import("$lib/components/CallToAction.svelte")}
  ><div slot="fallback">loading component...</div>

  <svelte:fragment slot="component" let:Component
    ><Component />
  </svelte:fragment>
</LazyComponent>
```

## Props

`this` props accept dynamic import of your component.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues](https://github.com/lib-package/svelte-lazy-component/issues) page.

## License

This package is [MIT licensed](./LICENSE).
