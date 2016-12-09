import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Route, inject } = Ember;

export default Route.extend({
    currentUser: inject.service(),
    // postInfo: stateFor('post-info', 'currentModel'),
    model({ id }) {
        return this.store.findRecord('post', id);
    },
    actions: {
        saveComment(post, commentBody) {
            let user = this.get('currentUser.user');
            let comment = this.store.createRecord('comment', {
                user,
                post,
                body: commentBody
            });
            comment.save().then(() => {
                let postInfos = stateFor('post-info');
                let postInfo = postInfos.get(post);
                postInfo.set('draftComment', '');
            });
        }
    }
});