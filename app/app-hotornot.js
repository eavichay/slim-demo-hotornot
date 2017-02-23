require('./hot-item');
require('./add-item');
var API = require('./items/API');

Slim.tag('app-hotornot', class extends Slim {

    get template() {
        return `
<h1>Hot or not?</h1>
<hr/>
<add-item on-new="handleNewItem"></add-item>
<hr/>
<hot-item slim-repeat="items" slim-repeat-as="item" on-vote="handleVote"></hot-item>
`
    }

    handleVote(item) {
        API.vote(item.id);
    }

    handleNewItem(details) {
        API.addItem(details.name, details.img);
    }

    onBeforeCreated() {
        this.items = [];
        API.observer.on('value', (context) => {
            let raw = context.val();
            this.items = [];
            Object.keys(raw).forEach( key => {
                this.items.push( {
                    id: key,
                    data: raw[key]
                })
            });
            this.items = this.items.sort( (a,b) => {
                if (a.data.votes < b.data.votes) return 1;
                return -1;
            });
            this.update();
        })
    }

})