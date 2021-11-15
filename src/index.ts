import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { mutations } from './mutations';
import { queries } from './queries';

const app = express();
const PORT = 4000;

var schema = buildSchema(`
	type Student {
		name: String
		school: String
	}

	type School {
		name: String
		students: [Student!]
	}

  type Query {
    students(name: String): [Student!]
		schools(minStudentCount: Int): [School!]
  }

	type Mutation {
		createStudent(name: String, school: String): Student!
		addStudentToSchool(name: String, schoolName: String): School
	}
`);

// The root provides a resolver function for each API endpoint
var root = {
	...queries,
	...mutations,
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	}),
);

app.listen(PORT, () => {
	console.log(
		`Running a GraphQL API server at http://localhost:${PORT}/graphql`,
	);
});
