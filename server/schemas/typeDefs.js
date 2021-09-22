// import the gql tagged template funciton
const {gql} = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
    }

    type Query {
        thoughts: [Thought]
    }
`;

// export typeDefs
module.exports = typeDefs;