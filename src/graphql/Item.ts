import {objectType} from 'nexus';

export const Item = objectType({
    name: 'Item',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
    }
});