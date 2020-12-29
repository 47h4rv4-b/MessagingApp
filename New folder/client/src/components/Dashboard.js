import React from 'react'
import Sidebar from './Sidebar'

export default function Dashboard({id}) {
    return (
        //WB-2,3
        <div className="d-flex" style={{ height: '100vh'}}> 
            <Sidebar id={id}/>
        </div>
        
        //Workbook-1 Working
        // <div>
        //     {id}
        // </div>
    )
}