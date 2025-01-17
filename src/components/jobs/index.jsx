import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import Cookies from 'js-cookie';
import './index.css';
import { useEffect, useState } from 'react';


const Jobs = ()=>{

    const [allValues,setValues] = useState({

        jobsArr : []

    });

    useEffect(()=>{

        const token = Cookies.get("jwtToken");

        const fetchJobs = async()=>{

            const api = "https://apis.ccbp.in/jobs";

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api,options);

                const data = await response.json();

                if( response.ok === true ){

                    setValues({...allValues,jobsArr : data.jobs});

                }


                
            } catch (error) {
                console.log(error);
            }

        }

        fetchJobs();

    },[]);

    return (

            <div>
                    <Header/>
                    <div className='container'>
                        <div className='row'>
                            <div className='filter-section col-12 col-lg-4'>
                                <FilterSection/>
                            </div>

                            <div className='all-jobs-section col-12 col-lg-8 p-3'>
                                <input type="search" className='form-control w-100 mb-3' placeholder='Please enter you job'/>
                                <ul>

                                    {
                                        allValues.jobsArr.map((each)=> <DisplayAllJobs jobsItem = {each} key = {each.id}/>)
                                    }
                                    
                                </ul>

                            </div>
                            
                        </div>
                    </div>

            </div>

    )
}




export default Jobs;