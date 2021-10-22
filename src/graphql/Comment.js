import { objectType ,extendType,nonNull,stringArg, intArg,scalarType} from 'nexus'

export const Comment = objectType({
    name: 'Comment',
    definition(t){
      t.int('id')
      t.string('body')
      t.field('User', {
        type: 'User',
        resolve(_root,_args,ctx){
          return ctx.db.user.findFirst({
              where:{
                  id: _root.authorId
              }
          })
        }
      })
    }
})

export const AllCommentQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('getAllComment', {
        type: 'Comment',
        resolve(_root, _args, ctx) {
          return ctx.db.comment.findMany()
        },
      })
    },
  })
  
  export const CommentQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.field('getComment', {
        type: 'Comment',
        args: {
          id: nonNull(intArg())
        },
        resolve(_root, args, ctx) {
          return ctx.db.comment.findFirst({
            where: {
              id: args.id
            }
          })
        },
      })
    },
  })
  
  export const deleteCommentMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('deleteComment', {
        type: 'Comment',
        args: {
          id: nonNull(intArg())
        },
        resolve(_root, args, ctx) {
          return ctx.db.comment.delete({ 
            where :{
              id:args.id
            }
          })
        },
      })
    },
  })
  
  export const createCommentMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createComment', {
            type: 'Comment',
            args: {
                authorId: nonNull(intArg()),                 
                body: nonNull(stringArg()),                  
            },
            resolve(_root, args, ctx) {
                const user = ctx.user.findFirst({
                    where: {
                        id: args.user_id
                    }
                })
                const comment = {
                    body: args.body,   
                    authorId:user.id                        
                }
                return ctx.db.Comments.push(comment)
            },
        })
    },
})
  export const UpdateCommentMutation = extendType({
    type: 'Mutation',
    definition(t) {
      t.nonNull.field('updateComment', {
        type: 'Comment',
        args: {
          id: nonNull(intArg()),
          body: nonNull(stringArg())
        },
        resolve(_root, args, ctx) {
          return ctx.db.user.update({ 
            where :{
              id:args.id
            },
            data:{
                body: args.body,
            }
          })
        },
      })
    },
  })