import {objectType} from 'nexus';

export const CartItem = objectType({
    name: 'CartItem',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.field('item', {
            type: 'Item',
            resolve(parent, args, context) {
                context.prisma.item.findUnique({where: {id: parent.id}})
            }
        });
    }
});