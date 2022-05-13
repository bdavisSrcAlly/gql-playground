import {objectType} from 'nexus';

export const ShoppingCart = objectType({
    name: 'ShoppingCart',
    definition(t) {
        t.nonNull.int('id');
        t.field('customer', {
            type: 'Customer',
            resolve(parent, args, context) {
                return context.prisma.shoppingCart.findUnique({where: {id: parent.id}}).customer();
            }
        })
    }
});