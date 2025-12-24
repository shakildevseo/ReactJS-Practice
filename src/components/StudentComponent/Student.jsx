import React from 'react'
const students = [
  {
    id: 1,
    name: "Rahim Uddin",
    age: 21,
    email: "rahim@gmail.com",
    enrolledCourses: [
      {
        courseId: 101,
        courseName: "HTML",
        coursePrice: 1500,
        module: 10
      },
      {
        courseId: 102,
        courseName: "CSS",
        coursePrice: 1800,
        module: 12
      },
      {
        courseId: 103,
        courseName: "JavaScript",
        coursePrice: 3000,
        module: 20
      },
      {
        courseId: 104,
        courseName: "React",
        coursePrice: 3500,
        module: 18
      },
      {
        courseId: 105,
        courseName: "Node.js",
        coursePrice: 3200,
        module: 15
      }
    ]
  },
  {
      id: 2,
    name: "Sadia Islam",
    age: 22,
    email: "sadia@gmail.com",
    enrolledCourses: [
      {
        courseId: 201,
        courseName: "HTML",
        coursePrice: 1500,
        module: 10
      },
      {
        courseId: 202,
        courseName: "CSS",
        coursePrice: 1800,
        module: 12
      },
      {
        courseId: 203,
        courseName: "JavaScript",
        coursePrice: 3000,
        module: 20
      },
      {
        courseId: 204,
        courseName: "Tailwind CSS",
        coursePrice: 2000,
        module: 14
      },
      {
        courseId: 205,
        courseName: "Git & GitHub",
        coursePrice: 1200,
        module: 8
      }
    ]
  }
];



const Student = () => {
  return (
   <>
    <h2>List of Student</h2>
      
   
        {students.map((studentInfo)=>(
           <div key={studentInfo.id}>
              <p>Student Id : {studentInfo.id}</p>
              <p>Student Name : {studentInfo.name}</p>
              <p> Student Age : {studentInfo.age}</p>
              <p>Student Email : {studentInfo.email}</p>
             <h4>Enrolled Course </h4>,
             {studentInfo.enrolledCourses.map((enCourse)=>(
                  <ul key={enCourse.courseId}>
                    
                    <li> Course Id : {enCourse.courseId}</li>
                    <li> Course Name : {enCourse.courseName}</li>
                    <li>Course Price : {enCourse.coursePrice}</li>
                    <li>Course Module :{enCourse.module}</li>
                  </ul>
             ))}
           </div>
        ))}
   
    
   
   </>
  )
}

export default Student