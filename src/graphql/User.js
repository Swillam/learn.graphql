import { objectType ,extendType,nonNull,stringArg, intArg} from 'nexus'
import { Post } from './Post'


export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('username')
    t.string('email')
    t.string('password')
    t.list.field('Post', {
      type: Post,
      resolve(_root,_args,ctx){
        return []
      }
    })
  },
})

export const AllUserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getAllUser', {
      type: 'User',
      resolve(_root, _args, ctx) {
        return ctx.db.user.findMany()
      },
    })
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getUser', {
      type: 'User',
      args: {
        id: nonNull(intArg())
      },
      resolve(_root, args, ctx) {
        return ctx.db.user.findFirst({
          where: {
            id: args.id
          }
        })
      },
    })
  },
})

export const createUserMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('createUser', {
        type: 'User',
        args: {
          email: nonNull(stringArg())
        },
        resolve(_root, args, ctx) {
          const user = {
            email: args.email,
          }
          return ctx.db.user.create({ data: user })
        },
      })
    },
})


export const deleteUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteUser', {
      type: 'User',
      args: {
        id: nonNull(intArg())
      },
      resolve(_root, args, ctx) {
        return ctx.db.user.delete({ 
          where :{
            id:args.id
          }
        })
      },
    })
  },
})

export const UpdateUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('updateUser', {
      type: 'User',
      args: {
        id: nonNull(intArg()),
        username: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg())
      },
      resolve(_root, args, ctx) {
        return ctx.db.user.update({ 
          where :{
            id:args.id
          },
          data:{
            username: args.username,
            email:args.email,
            password: args.password
          }
        })
      },
    })
  },
})