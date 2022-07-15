const StudentRepository = require('../database/repositories/studentRepository.js');

class StudentService {
  constructor() {
    this.repository = new StudentRepository();
  }

  async getAllStudents(){
    return this.repository.findAll();
  }
};

module.exports = StudentService;
