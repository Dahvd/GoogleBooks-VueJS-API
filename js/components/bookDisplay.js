app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }    

    },
    template:
    /*html*/
    `<ul class="col-sm-12 col-md-6 col-xl-4">
    <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink">{{ this.bookObj.volumeInfo.title}}</a>
    <li id="bookPicture" class="list-group-item"><img v-bind:src="this.bookObj.volumeInfo.imageLinks.smallThumbnail" alt="img" /></li>
    <li v-if="this.bookObj.volumeInfo.authors!= undefined" class="list-group-item"><span v-for="auth in this.bookObj.volumeInfo.authors">{{auth}}. </span></li>
    <li class="list-group-item"> 
        <span v-if="this.bookObj.volumeInfo.publisher != undefined">{{this.bookObj.volumeInfo.publisher}}. </span>
        <span v-if="this.bookObj.volumeInfo.publishedDate != undefined"> {{this.bookObj.volumeInfo.publishedDate}}</span></li>
    <li v-if="this.bookObj.volumeInfo.description!= undefined" class="list-group-item">Description: {{this.bookObj.volumeInfo.description}}</li>
    <li v-if="this.bookObj.volumeInfo.pageCount!= undefined" class="list-group-item">Pages: {{this.bookObj.volumeInfo.pageCount}} </span></li>

    </ul>`,

    computed: {
        bookObj() {
            if(this.book != null)
            {
                return JSON.parse(this.book);
            }
                
            else
                return null;
        }
    }


})