import {extendType, nonNull, objectType, stringArg} from 'nexus';

export const Customer = objectType({
    name: 'Customer',
    definition(t) {
        t.nonNull.int('id');
        t.nonNull.string('name');
        t.nonNull.string('email');
        t.field('shoppingCart', {
            type: "ShoppingCart",
            resolve(parent, args, context) {
                return context.prisma.customer.findUnique({where: {id: parent.id}}).shoppingCart()
            }
        })
    }
});

export const CustomerQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.field('customer', {
            type: "Customer",
            args: {
                email: nonNull(stringArg())
            },
            async resolve(parent, args, context) {
                const email = args.email || '';

                return context.prisma.customer.findUnique({where: {email}});
            }
        })
    }
});