// Grading Scores Inputed By Users With Ternary Operators

let score = prompt('Enter Your Total Score');
let grade;
let collegeStudent;
console.log(typeof score);

let totalScore = Number(score);
console.log(typeof totalScore);

grade =
	typeof totalScore === typeof 56
		? totalScore <= 100 && totalScore >= 90
			? 'A'
			: totalScore < 90 && totalScore >= 80
			? 'B'
			: totalScore < 80 && totalScore >= 70
			? 'C'
			: totalScore < 70 && totalScore >= 60
			? 'D'
			: totalScore < 60 && totalScore >= 50
			? 'E'
			: totalScore < 50 && totalScore >= 0
			? (collegeStudent = confirm(
					"Are You A College Student\nIf YES click 'OK'"
			  )
					? 'Your Result Is Unsatisfactory\nYou Got An F'
					: 'F')
			: 'Enter A Valid Score'
		: 'Enter A Valid Score';

console.log(`Your score is ${score}, so your grade is  ${grade}`);
alert(`Your score is ${score}, so your grade is  ${grade}`);
