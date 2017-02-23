Slim.tag('hot-item', class extends Slim {

    get template() {
        return `<div>
                    <span bind>[[item.data.name]] - Votes: [[item.data.votes]]</span>
                    <br/>
                    <img src="[[item.data.img]]" />
                    <br/>
                    <button click="clickVote">HOT!!!</button>
                </div>`
    }

    clickVote() {
        this.callAttribute('on-vote', this.item);
    }

})