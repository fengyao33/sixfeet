//新增一筆
db.students.insertOne({
  studentName: "Riley Parker",
  group: "A",
  score: 83,
  isPaid: false,
});
//新增多筆
db.students.insertMany([
  {
    studentName: "Brennan Miles",
    group: "C",
    score: 72,
    isPaid: false,
  },
  {
    studentName: "Mia Diaz",
    group: "B",
    score: 98,
    isPaid: true,
  },
  {
    studentName: "Caroline morris",
    group: "B",
    score: 55,
    isPaid: false,
  },
  {
    studentName: "Beverly Stewart",
    group: "B",
    score: 60,
    isPaid: false,
  },
]);
//查filed:group = B
db.students.find({ group: "B" });
//查filed:source > 60
db.students.find({ score: { $gt: 60 } });
//查filed:source < 60 || filed:group = B
db.students.find({ $or: [{ score: { $lt: 60 } }, { group: "B" }] });
