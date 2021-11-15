export type Student = {
	name: string;
	school: string;
};

export type School = {
	name: string;
	students: Student[];
};
