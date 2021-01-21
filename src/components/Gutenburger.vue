<template>
  <div class="gutenburger-editor">
      <Nav></Nav>
    
      <form class="editor">
          <textarea @keyup="resizeTitleField($event)" placeholder="Title" class="post-heading" id="post-heading" name="postHeading"></textarea>
      </form>

  </div>
</template>

<script>

import EditorNav from './Nav';
// import EditorSidebar from './Sidebar';

export default {
    data: function(){
        return {
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

        }
    }
}
</script>

<style lang="scss">
    /* Import reset.css */
    @import url('../css/reset.css');

    /* Import some text styling */
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

    .gutenburger-editor {
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

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

                &:focus {
                    border: none;
                    outline: 2px solid transparent;
                }
            }
        }
    }

</style>