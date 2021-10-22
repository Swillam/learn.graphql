import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, 'nexus-typegen.js'),
    schema: join(__dirname, 'schema.graphql'),
  },
  contextType: {
    module: join(__dirname, "context.js"),
    export: "Context",
  },
})