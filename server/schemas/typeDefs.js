const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID
    authors: [String, String]
    description: String
    title: String
    image:
    link:
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String!], description: String!, title: String!, bookId: ID!, image:  , link: ): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
