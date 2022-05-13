import {objectType} from 'nexus';

export const Customer = objectType({
    name: 'Customer',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.string('email');
    }
});