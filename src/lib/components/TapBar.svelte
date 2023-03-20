<script>
    import { page } from '$app/stores';
    export let acctMenuIsOpen
    export let toggleAcctMenuIsOpen
</script>

<style>
    .tapBarMenu {
        @apply h-[11.5vh] bg-white w-full fixed bottom-0 max-w-[576px] grid grid-cols-tapbarmenu grid-rows-tapbarmenu z-20 shadow-md;
    }
    .menuItem {
        @apply w-full p-4 flex justify-center items-center;
    }
    img {
        @apply w-8 h-8;
    }
    .flip {
        @apply -scale-x-100;
    }
    .newReportBtn {
        @apply absolute flex h-auto justify-center items-center bg-prime rounded-full p-4 right-1/2 -top-1/2 translate-x-1/2 z-10;
        -webkit-box-shadow: 0px 20px 28px -7px rgba(14,115,74,0.24); 
        box-shadow: 0px 20px 28px -7px rgba(14,115,74,0.24);
    }
    .newReportBtn img {
        @apply h-6 w-6;
    }
</style>

<div class="tapBarMenu">
    <a href="/" class="menuItem">
        {#if $page.url.pathname == '/'}
            <img src="/images/home_active.png" alt="Home menu icon" />
        {:else}
            <img src="/images/home_inactive.png" alt="Home menu icon" />
        {/if}
    </a>
    <a href="/tickets" class="menuItem">
        {#if $page.url.pathname.startsWith('/tickets')}
            <img src="/images/ticket_active.png" alt="ticket icon" />
        {:else}
            <img src="/images/ticket_inactive.png" alt="ticket icon" />
        {/if}
    </a>
    <a href="/locations" class="menuItem">
        {#if $page.url.pathname.startsWith('/locations')}
            <img src="/images/location_active.png" alt="location icon" />
        {:else}
            <img src="/images/location_inactive.png" alt="location icon" />
        {/if}
    </a>
    <span class="menuItem" on:click={toggleAcctMenuIsOpen}>
        {#if acctMenuIsOpen}
            <img src="/images/user_active.png" alt="User icon" />
        {:else}
            <img src="/images/user_inactive.png" alt="User icon" />
        {/if}
    </span>
</div>