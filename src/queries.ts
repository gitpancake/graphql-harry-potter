import { schools, students } from './data';
import { School, Student } from './types';

export const queries = {
	schools: ({ minStudentCount }: { minStudentCount: number }): School[] => {
		if (!minStudentCount) {
			return schools;
		}

		return schools.filter(
			(school) => school.students.length >= minStudentCount,
		);
	},
	students: ({ name }: { name: string }): Student[] => {
		if (!name) {
			return students;
		}

		return students.filter((student) => student.name.includes(name));
	},
};
