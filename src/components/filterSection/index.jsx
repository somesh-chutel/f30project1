import './index.css';

const empTypeArr = [

    {
        title : "Part Time",
        id : "PARTTIME"
    },
    {
        title : "Fulltime",
        id : "FULLTIME"
    },
    {
        title : "Freelance",
        id : "FREELANCE"
    },{
        title : "Internship",
        id : "INTERNSHIP"
    }

]


const FilterSection = ()=>{


    return (

        <>
                <u>
                    {
                        empTypeArr.map(each=>(
                            <li key={each.id}>
                                <label htmlFor={each.id}>{each.title}</label>
                                <input type="checkbox" value={each.id}/>
                            </li>
                        ))
                    }
                </u>
        
        </>

    )
}



export default FilterSection;