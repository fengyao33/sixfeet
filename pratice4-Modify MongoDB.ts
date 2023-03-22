// 1.指定其中一個 _id ，並將該筆 document 的 group 改為 D
db.students.updateOne(
  { _id: ObjectId("641441a39f68c915cba6936f") },
  { $set: { group: "D" } }
);

// 2.將 group 為 B 的多筆 document 的 isPaid 改為 true
db.students.updateMany({ group: "B" }, { $set: { isPaid: true } });
// 3.將 studentName 包含關鍵字 Brennan 的 document 刪除
db.students.deleteMany({ studentName: /Brennan/ });

// 4.將 isPaid 為 true 的多筆 document 刪除
db.students.deleteMany({ isPaid: true });
