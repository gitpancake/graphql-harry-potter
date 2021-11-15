import { School, Student } from 'src/types';

export const students: Student[] = [
	{ name: 'Harry Potter', school: 'Hogwarts' },
	{ name: 'Ron Weasley', school: 'Hogwarts' },
	{ name: 'Viktor Krum', school: 'Durmstrang' },
];

export const schools: School[] = [
	{
		name: 'Hogwarts',
		students: [
			{ name: 'Harry Potter', school: 'Hogwarts' },
			{ name: 'Ron Weasley', school: 'Hogwarts' },
		],
	},
	{
		name: 'Durmstrang',
		students: [{ name: 'Viktor Krum', school: 'Durmstrang' }],
	},
];
