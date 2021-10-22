import { objectType ,extendType,nonNull,stringArg, intArg,asNexusMethod} from 'nexus'
import { GraphQLDate } from 'graphql-iso-date'
export const GQLDate = asNexusMethod(GraphQLDate, 'date')

export const Post = objectType({
    name: 'Post',
    definition(t){
      t.int('id')
      t.string('title')
      t.string('body')
      t.date('createdAt')
      t.date('updatedAt')
      t.field('comment', {
        type: 'Comment',
        resolve(_root,_args,ctx){
          return ctx.db.comment.findMany({
            where:{
              authorId : _root.authorId
            }
          })
        }
      })
      t.field('author', {
        type: 'User',
        resolve(_root,_args,ctx){
          return ctx.db.user.findMany({
            where:{
              id : _root.authorId
            }
          })
        }
      })
    }
  })


  export const AllPostQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('getAllPost', {
        type: 'Post',
        resolve(_root, _args, ctx) {
          return ctx.db.post.findMany()
        },
      })
    },
  })
  
  export const PostQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('getPost', {
        type: 'Post',
        args: {
          id: nonNull(intArg())
        },
        resolve(_root, args, ctx) {
          return ctx.db.post.findFirst({
            where: {
              id: args.id
            }
          })
        },
      })
    },
  })
  
  export const deletePostMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('deletePost', {
        type: 'Post',
        args: {
          id: nonNull(intArg())
        },
        resolve(_root, args, ctx) {
          return ctx.db.post.delete({ 
            where :{
              id:args.id
            }
          })
        },
      })
    },
  })
  
  export const createPostMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createPost', {
            type: 'Post',
            args: {
                title: nonNull(stringArg()),                                        
                authorId: nonNull(intArg()),                 
                body: nonNull(stringArg()),                  
            },
            resolve(_root, args, ctx) {
                const user = ctx.user.findFirst({
                    where: {
                        id: args.user_id
                    }
                })
                const post = {
                    title: args.title,                         
                    body: args.body,   
                    authorId:user.id                        
                }
                return ctx.db.posts.push(post)
            },
        })
    },
})
  export const UpdatePostMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('updatePost', {
        type: 'Post',
        args: {
          id: nonNull(intArg()),
          title: nonNull(stringArg()),
          body: nonNull(stringArg())
        },
        resolve(_root, args, ctx) {
          return ctx.db.user.update({ 
            where :{
              id:args.id
            },
            data:{
                title: args.title,
                body: args.body,
                updatedAt:now()
            }
          })
        },
      })
    },
  })