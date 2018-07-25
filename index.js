new Vue({
    el:'#fade',
    data: {
        show:true,
        text:"Hide"
    },
    methods: {
        change: function(){
            if (this.show){
                this.text="Show";
            }
            else
                this.text="Hide";
            this.show = !this.show
        }   
    }
});

new Vue({
    el:'#bounce',
    data: {
        show:true,
    }
});

new Vue({
    el: '#floatup',
    data: {
      show: true
    }
});

new Vue({
    el: '#typingText',
    data: {
      show: false
    }
})