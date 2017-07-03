import Vue from 'vue'

var app = new Vue({

    el: '#root',

    data: {
        input_name: '',
        names: ['NIP', 'CHP', 'PAM', 'WIL']
    },

    methods: {

        addName() {
            this.names.push(this.input_name);
            this.input_name = '';
        }
    }
});