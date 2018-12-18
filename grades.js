const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0
} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    grades.A++
  } else if (scores[i] > 80 && scores[i] < 91) {
    grades.B++
  } else if (scores[i] > 70 && scores[i] < 81) {
    grades.C++
  } else if (scores[i] > 60 && scores[i] < 71) {
    grades.D++
  } else {
    grades.F++
  };
  };
  console.info("How Many Of Each Grade",grades)

  console.info("Scores Low To High", scores.sort());

  console.info("Scores High To Low", scores.sort().reverse());
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
