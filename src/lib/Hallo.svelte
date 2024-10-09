<script lang="ts">
    import type { Snippet } from "svelte";
    interface ButtonProps {
        onclick: () => void;
        children: Snippet;
        color?: string;
    }

    const {
        onclick,
        children,
        color = '',
    }:ButtonProps = $props();
</script>

<button {onclick}
class="cursor-pointer drop-shadow-md px-4 pb-[9px] pt-[7px] text-base text-white font-bold text-shadow top-light-24 {(color === 'Gray' && 'bg-gradient-window') || 'bg-gradient-active'} rounded">
    {@render children?.()}
</button>
