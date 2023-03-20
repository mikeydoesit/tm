<script>
    export let user;
</script>

<style>
    .greeting_wrapper {
        @apply flex flex-col pt-32 px-7;
    }
    .greeting_title {
        @apply text-greeting_grey font-medium mb-1 text-sm;
    }
    .greeting_subtitle {
        @apply font-bold text-white text-xl;
    }
</style>

<div class='greeting_wrapper'>
    <div class='greeting_title'>
        <h5>Hello {user}</h5>
    </div>
    <div class='greeting_subtitle'>
        <h2>Discover Amazing Events</h2>
    </div>
</div>