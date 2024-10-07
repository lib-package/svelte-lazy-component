declare module "viewport" {
  export interface ViewportObserver {
    destroy: () => void;
  }

  export default function viewport(element: Element): ViewportObserver;
}

declare module "svelte/elements" {
  interface HTMLAttributes<T> {
    "on:enterViewport"?: (event: CustomEvent<void>) => void;
    "on:exitViewport"?: (event: CustomEvent<void>) => void;
  }
}

declare module "*.svelte" {
  import { SvelteComponentTyped } from "svelte";
  const component: SvelteComponentTyped;
  export default component;
}

export {};
