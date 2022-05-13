import {extendType, nonNull, objectType, intArg} from 'nexus';

export const ShoppingCart = objectType({
    name: 'ShoppingCart',
    definition(t) {
        t.nonNull.int('id');
        t.list.field('cartItems', {
            type: "CartItem",
            resolve(parent, args, context) {
                return context.prisma.shoppingCart.findUnique({where: {id: parent.id}}).cartItems()
            }
        })
    }
});
