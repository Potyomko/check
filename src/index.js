const BASE_URL = 'http://localhost:3000';

// GET /students - повернути всіх студентів.

function getStudents() {
    fetch(`${BASE_URL}/students`)
    .then(response => response.json())
    .then(console.log)
  }

  getStudents()

//   GET /students/:id - повернути студента за ідентифікатором.

function getStudentsById(studentsId) {
    fetch(`${BASE_URL}/students/${studentsId}`)
    .then(response => response.json())
    .then(console.log)
  }

//   POST /students - додати нового студента.

function addNewStudent(newStudent) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    }
   return fetch(`${BASE_URL}/students`, options)
    .then(res=>res.json())
    .then(console.log)
}

addNewStudent({
    "name": "Veronika Potyomko",
    "age": 13,
    "email": "vnpotomko@gmail.com",
    "phone": "0682891773"
  })

//   PUT /students/:id - оновити інформацію про студента за ідентифікатором.

const updateStudent = {
    age: 15,
    phone: "0986627178",
};

function updatedNewStudent(updatedStudent, studentsPutId) {
    const optionsS = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
    };

    const url = `${BASE_URL}/students/${studentsPutId}`;
    return fetch(url, optionsS)
    .then((res)=>res.json())
    .then(console.log);
}

updatedNewStudent(updateStudent, 1);

// DELETE /students/:id - видалити студента за ідентифікатором.

const postIdToDelete = 3;

fetch(`${BASE_URL}/students/${postIdToDelete}`,{
    method: 'DELETE',
})
    .then(()=>console.log)
    .catch(error=>console.log(error));
