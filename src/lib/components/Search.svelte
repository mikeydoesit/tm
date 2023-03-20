<script>
    import { search_term } from "../../stores/store";

    const set_search_term = (e) => {
        search_term.set(e.target.value)
        console.log($search_term)
    }
</script>

<style>
    .search_wrapper {
        @apply bg-gradient-to-r from-input_gradient_from to-input_gradient_to mx-7 mt-8 py-4 px-5 rounded-2xl flex flex-row justify-between items-center;
    }
    label {
        @apply h-5 w-5 mr-3;
    }
    label img {
        @apply h-full w-full;
    }
    #search_term {
        @apply w-[-webkit-fill-available] bg-transparent text-white font-medium text-lg;
    }
    #search_term:focus {
        @apply outline-0 border-0;
    }
</style>

<div class='search_wrapper'>
    <label for='search_term'>
        <img src='/images/search.png' alt='a search icon'/>
    </label>
    <input id='search_term' type='text' on:input={set_search_term}/>
</div>