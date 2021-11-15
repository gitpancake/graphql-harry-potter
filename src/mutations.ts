import { schools, students } from './data';
import { School, Student } from './types';

export const mutations = {
	createStudent: ({
		name,
		school,
	}: {
		name: string;
		school: string;
	}): Student => {
		const newStudent: Student = { name, school };

		students.push(newStudent);

		return newStudent;
	},

	addStudentToSchool: ({
		name,
		schoolName,
	}: {
		name: string;
		schoolName: string;
	}): School | undefined => {
		const student = students.find((student) => student.name === name);
		const school = schools.find((school) => school.name === schoolName);

		if (!student || !school) {
			return undefined;
		}

		school.students.push(student);

		return school;
	},
};
