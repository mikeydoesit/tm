<script>
    import EventSliderHeader from '../components/EventSliderHeader.svelte'
    import EventSliderContent from '../components/EventSliderContent.svelte'
</script>

<style>
    .event_slider_wrapper {
        @apply absolute -top-36 px-7 w-full;
    }
</style>

<div class='event_slider_wrapper'>
    <EventSliderHeader />
    <EventSliderContent />
</div>