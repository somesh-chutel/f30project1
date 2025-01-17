import { FaStar,FaBriefcase  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './index.css';

/*

{
    "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
    "employment_type": "Full Time",
    "id": "d6019453-f864-4a2f-8230-6a9642a59466",
    "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
    "location": "Bangalore",
    "package_per_annum": "21 LPA",
    "rating": 4,
    "title": "Backend Engineer"
}


*/


const DisplayAllJobs = (prop)=>{

    const {jobsItem} = prop;

    return (

            <li style={{listStyle:"none"}} className='border border-primary rounded p-2 mb-3'>

                <div className='d-flex'>
                    <img src={jobsItem.company_logo_url} width="10%"/>  
                    <div className='ml-4'>
                        <h2>{jobsItem.title}</h2>
                        <FaStar className="mr-2"/>
                        <span>{jobsItem.rating}</span>
                    </div>
                </div>

                <div className="mt-3 d-flex justify-content-between">
                        <div>
                            <span>{jobsItem.location}</span>
                            <FaLocationDot className="ml-1 mr-3"/>
                            <span>{jobsItem.employment_type}</span>
                            <FaBriefcase className="ml-1"/>
                        </div>
                        <h5>{jobsItem.package_per_annum}</h5>
                </div>

                <hr />

                <h5>Description</h5>
                <p>{jobsItem.job_description}</p>

            </li>

    )
}



export default DisplayAllJobs;