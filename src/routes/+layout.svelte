<script>
    import "../styles/global.css"
    import Header from '../lib/components/Header.svelte'
    import TapBar from "../lib/components/TapBar.svelte";
</script>
<style>
    .main_wrapper {
        @apply bg-app_bgd h-screen w-full;
    }
</style>
<div class='main_wrapper'>
    <Header />
        <slot />
    <TapBar />
</div>