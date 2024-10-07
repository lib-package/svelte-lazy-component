<script lang="ts">
  import viewport from "../lib/viewport-action";

  let loadComponent: any;

  export { loadComponent as this };

  let isShowingComponent = false;
  let componentPromise: Promise<{
    default: ConstructorOfATypedSvelteComponent;
  }>;

  const handleEnterViewport = () => {
    componentPromise = loadComponent();
    isShowingComponent = true;
  };
</script>

{#if !isShowingComponent}
  <div use:viewport on:enterViewport={handleEnterViewport} />
{:else}
  {#await componentPromise}
    <slot name="fallback">Loading...</slot>
  {:then { default: Component }}
    <slot name="component" {Component} />
  {/await}
{/if}
