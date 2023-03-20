<script>
    import Greeting from '../lib/components/Greeting.svelte'
    import Search from '../lib/components/Search.svelte'
    import EventSlider from '../lib/components/EventSlider.svelte'
</script>

<style>
    .topHalf {
        @apply h-auto pb-48;
        background: #131822;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom right, #57585f, 70%, #131822);  /* Chrome 70-25, Safari 5.1-6 */
        background: linear-gradient(to bottom right, #57585f, 10%, #131822); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .bottomHalf {
        @apply relative;
    }
</style>

<div class='topHalf'>
    <Greeting user={'Akosua'}/>
    <Search />
</div>
<div class='bottomHalf'>
    <EventSlider />
</div>