import Ember from 'ember';

const { Service, inject, RSVP: { resolve } } = Ember;

export default Service.extend({
    store: inject.service(),
    loadUserInfo() {
        let cached = this.get('store').peekRecord('user', 'current');
        let p = cached ? resolve(cached) : this.get('store').findRecord('user', 'current');
        return p.then((usr) => {
            this.set('user', usr);
            return usr;
        });
    }
});