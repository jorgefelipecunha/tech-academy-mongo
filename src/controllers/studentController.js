const StudentService = require("../services/studentService");

exports.get = async (req, res, next) => {
  const payload = await new StudentService().getAllStudents();
  res.status(200).send(payload);
};
