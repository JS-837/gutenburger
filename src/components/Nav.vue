<template>
  <nav id="gutenburger-nav">
    <a hred="#" class="home"><a href="#">Home</a></a>

    <ul class="items">
        <li class="item"><a href="#" class="pseudo-btn save">Save</a></li>
        <li class="item"><a href="#" class="pseudo-btn">Publish</a></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    $main-color: #000;
    $btn-bg-color: #007cba;
    $btn-bg-neutral: #dfdddd;
    $btn-text-color: #ddd;
    $btn-text-dark-text: #161616;
    $btn-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    #gutenburger-nav {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 100%;
        height: 3.75rem;
        padding: 0 1.875rem;
        box-sizing: border-box;
        border-bottom: 1px solid lighten($main-color, $amount: 90);
        align-items: center;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;

        a {
            color: inherit;
            text-decoration: none;
        }

        .items {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;

            .item {
                margin-left: 25px;

                .pseudo-btn {
                    display: block;
                    text-decoration: none;
                    background-color: $btn-bg-color;
                    color: $btn-text-color;
                    padding: 12px 10px;
                    border-radius: 2px;
                    box-shadow: $btn-box-shadow;

                    &:hover {
                        background-color: lighten($btn-bg-color, $amount: 10);
                    }
                }

                .save {
                    background-color: $btn-bg-neutral;
                    color: $btn-text-dark-text;

                    &:hover {
                        background-color: darken($btn-bg-neutral, $amount: 10);
                    }
                }
            }
        }
        // background-color: $black;
    }


</style>