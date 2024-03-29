/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context.js"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Comment: { // root type
    body?: string | null; // String
    id?: number | null; // Int
  }
  Mutation: {};
  Post: { // root type
    body?: string | null; // String
    createdAt?: NexusGenScalars['Date'] | null; // Date
    id?: number | null; // Int
    title?: string | null; // String
    updatedAt?: NexusGenScalars['Date'] | null; // Date
  }
  Query: {};
  User: { // root type
    email?: string | null; // String
    id?: number | null; // Int
    password?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Comment: { // field return type
    User: NexusGenRootTypes['User'] | null; // User
    body: string | null; // String
    id: number | null; // Int
  }
  Mutation: { // field return type
    createComment: NexusGenRootTypes['Comment']; // Comment!
    createPost: NexusGenRootTypes['Post']; // Post!
    createUser: NexusGenRootTypes['User']; // User!
    deleteComment: NexusGenRootTypes['Comment']; // Comment!
    deletePost: NexusGenRootTypes['Post']; // Post!
    deleteUser: NexusGenRootTypes['User']; // User!
    updateComment: NexusGenRootTypes['Comment']; // Comment!
    updatePost: NexusGenRootTypes['Post']; // Post!
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    body: string | null; // String
    comment: NexusGenRootTypes['Comment'] | null; // Comment
    createdAt: NexusGenScalars['Date'] | null; // Date
    id: number | null; // Int
    title: string | null; // String
    updatedAt: NexusGenScalars['Date'] | null; // Date
  }
  Query: { // field return type
    getAllComment: Array<NexusGenRootTypes['Comment'] | null>; // [Comment]!
    getAllPost: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
    getAllUser: Array<NexusGenRootTypes['User'] | null>; // [User]!
    getComment: Array<NexusGenRootTypes['Comment'] | null>; // [Comment]!
    getPost: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
    getUser: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  User: { // field return type
    Post: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    email: string | null; // String
    id: number | null; // Int
    password: string | null; // String
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Comment: { // field return type name
    User: 'User'
    body: 'String'
    id: 'Int'
  }
  Mutation: { // field return type name
    createComment: 'Comment'
    createPost: 'Post'
    createUser: 'User'
    deleteComment: 'Comment'
    deletePost: 'Post'
    deleteUser: 'User'
    updateComment: 'Comment'
    updatePost: 'Post'
    updateUser: 'User'
  }
  Post: { // field return type name
    author: 'User'
    body: 'String'
    comment: 'Comment'
    createdAt: 'Date'
    id: 'Int'
    title: 'String'
    updatedAt: 'Date'
  }
  Query: { // field return type name
    getAllComment: 'Comment'
    getAllPost: 'Post'
    getAllUser: 'User'
    getComment: 'Comment'
    getPost: 'Post'
    getUser: 'User'
  }
  User: { // field return type name
    Post: 'Post'
    email: 'String'
    id: 'Int'
    password: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createComment: { // args
      authorId: number; // Int!
      body: string; // String!
    }
    createPost: { // args
      authorId: number; // Int!
      body: string; // String!
      title: string; // String!
    }
    createUser: { // args
      email: string; // String!
    }
    deleteComment: { // args
      id: number; // Int!
    }
    deletePost: { // args
      id: number; // Int!
    }
    deleteUser: { // args
      id: number; // Int!
    }
    updateComment: { // args
      body: string; // String!
      id: number; // Int!
    }
    updatePost: { // args
      body: string; // String!
      id: number; // Int!
      title: string; // String!
    }
    updateUser: { // args
      email: string; // String!
      id: number; // Int!
      password: string; // String!
      username: string; // String!
    }
  }
  Query: {
    getComment: { // args
      id: number; // Int!
    }
    getPost: { // args
      id: number; // Int!
    }
    getUser: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}