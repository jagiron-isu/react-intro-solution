import React from 'react'
//import {} from 'react-icons/fa'


const Project = ({ project, onDelete }) => {
    return (

        <div className='row'>
            <h5>{project.desc}</h5>            
            <h5>{project.date}</h5>
        </div>
    )
}

export default Project