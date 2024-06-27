import React, { useState } from 'react'
import Card from './Card';
import { FcLikePlaceholder } from "react-icons/fc";


const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const [likedCourses,setLikedCourses]=useState([]);

    //map ke liye single array me daalna hoga 

    function getCourse(){
      if(category==="All"){
        let allCourses=[]; 
        Object.values(courses).forEach((array)=>{
           array.forEach(courseData=>{
            allCourses.push(courseData);
           })
  
           })
           return allCourses;
      }
      else{
        //main sirf specific category ka array pass krunga
        return courses[category];
      }
      

    }
 
    
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
       getCourse().map((course) => (
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
       ))
      }
    </div>
  )
}

export default Cards