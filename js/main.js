const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            counter: 0
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.counter + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json )
        },

        paginate(next) {
            //net false so want to go previous so decrement
            if(next == false) {
                this.counter -= 20;
                this.searchGoogleBooks();
            }
            //next true so go to next results
            else {
                this.counter += 20;
                this.searchGoogleBooks();
            }
        }
    }

    })