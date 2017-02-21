const watcher = firebase.database().ref('item');

module.exports = {

    addItem: function(name, url) {
        firebase.database().ref('item').push({
            name: name,
            img: url
        });
    },

    vote: function(itemId) {
        firebase.database().ref('item/' + itemId).once('value', (snapshot) => {
            firebase.database().ref('item/' + itemId).update({
                votes: (snapshot.val()['votes'] || 0) + 1
            });
        });
    },

    observer: watcher


};
