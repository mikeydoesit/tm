<div class='header_wrapper'>
    <div class='logo_wrapper'>
        <img src='/images/evently_logo.png' alt='company logo' />
    </div>

    <div class='avatar_wrapper'>
        <img src='/images/avatar_placeholder.png' alt='user avatar' />
    </div>
</div>

<style>
    .header_wrapper {
        @apply flex flex-row justify-between fixed top-0 w-full z-10 bg-transparent px-7 py-10 max-w-[576px];
    }
    .logo_wrapper {
        @apply w-32 cursor-pointer;
    }
    .avatar_wrapper {
        @apply h-10 w-10 rounded-full cursor-pointer;
    }
    .avatar_wrapper img {
        @apply rounded-full h-full w-full object-cover;
    }
</style>