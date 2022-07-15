class StudentRepository {
  async findAll() {
    const alunos = [
      {
        code: 12345,
        name: 'José da Silva',
        dob: '2000-07-09'
      },
      {
        code: 12346,
        name: 'Joana Souza',
        dob: '1998-01-11'
      },
      {
        code: 12347,
        name: 'Lucas Gomes',
        dob: '1992-07-17'
      },
      {
        code: 12348,
        name: 'Maria Eduarda',
        dob: '2001-02-09'
      },
    ];
    return alunos;
  }
}

module.exports = StudentRepository;
