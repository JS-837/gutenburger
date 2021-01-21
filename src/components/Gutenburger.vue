<template>
  <div class="gutenburger-editor">
      <Nav></Nav>
    
    <form class="editor">
        <textarea @keyup="resizeTitleField($event)" placeholder="Title" class="post-heading" id="post-heading" name="postHeading"></textarea>

        <div class="post-body">
            <p class="post-body-paragraph" data-block="block-1" id="block-1" contenteditable="true" placeholder="Start Writing or type / to choose a block"></p>
        </div>

        <!-- <textarea placeholder="Content" class="post-body" id="post-body" name="postBody"></textarea>   -->
    
      
    </form>

  </div>
</template>

<script>

import EditorNav from './Nav';
// import EditorSidebar from './Sidebar';

export default {
    data: function(){
        return {
            placeholderIsActive: true,
            titleAreaHeight: 0,
        }
    },
    mounted: function(){
        console.log('wow!');
    },
    components: {
        Nav: EditorNav,
        // Sidebar: EditorSidebar,
    },
    methods: {
        resizeTitleField: function(e){
            let textArea = e.target;

            // on delete, set height to auto to potentially shrink away empty lines
            textArea.style.height = 'auto';

            // then grab the height calculated from auto and apply it to the element again.
            textArea.style.height = `${textArea.scrollHeight}px`;
        },
        togglePlaceholderText: function(e){

            // e.currentTarget.focus;
            console.log(e.currentTarget);

            document.getElementById('block-1').focus();
             document.getElementById('block-1').focus();

            if(this.placeholderIsActive){
                this.placeholderIsActive = false;
            }else if(!this.placeholderIsActive && e.target.innerText.length == 0){
                this.placeholderIsActive = true;
            }
        },

    }
}
</script>

<style lang="scss">
    /* Import reset.css */
    @import url('../css/reset.css');

    /* Import some text styling */
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

    $btn-text-dark-text: #161616;

    .gutenburger-editor {
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        
        // Make sure placeholders for contenteditable elements are visible
        [contenteditable][placeholder]:empty:before {
            content: attr(placeholder);
            color: lighten($color: $btn-text-dark-text, $amount: 50);
        }

        // Remove outlines of contenteditable element placeholders on focus
        [contenteditable][placeholder]:focus {
            outline: none;
            color: inherit;
        }

        .editor {
            align-self: center;
            margin-top: 30px;
            width: 100%;
            padding: 0 60px;
            box-sizing: border-box;
            max-width: 960px;

            .post-heading {
                width: 100%;
                font-size: 5.25rem;
                font-weight: 600;
                border: none;
                overflow: hidden;
                resize: none;
                box-sizing: border-box;
                color: lighten($color: $btn-text-dark-text, $amount: 50);
                font-family: inherit;

                &:focus {
                    border: none;
                    outline: 2px solid transparent;
                    color: $btn-text-dark-text;
                }
            }

            .post-body {
                width: 100%;
                font-size: 1rem;
                font-weight: 400;
                border: none;
                overflow: hidden;
                resize: none;
                box-sizing: border-box;
                color: lighten($color: $btn-text-dark-text, $amount: 50);
                font-family: inherit;

                // Show content
                &:focus {
                    border: none;
                    outline: none;
                    color: $btn-text-dark-text;
                }

                .post-body-paragraph {
                    padding: 5px 5px; 
                    box-sizing: border-box;
                    cursor: text;
                    color: $btn-text-dark-text;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                }
            }
        }
    }

</style>