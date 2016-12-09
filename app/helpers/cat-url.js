import Ember from 'ember';

export function catUrl (params, hash) {
    return `http://placekitten.com/${hash.w}/${hash.h}`;
}

export default Ember.Helper.helper(catUrl);