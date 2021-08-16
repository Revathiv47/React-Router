import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './userContext';

function Users() {
    const userContext = useContext(UserContext);
    return (
        <>
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/user-create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>


<div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>startDate</th>
                                            <th>salary</th>
                                            <th>Action</th>

                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            userContext.userList.map((user, index) => {
                                                return <tr>
                                                <td>{index + 1}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.position}</td>
                                                <td>{user.office}</td>
                                                <td>{user.age}</td>
                                                <td>{user.startDate}</td>
                                                <td>{user.salary}</td>
                                                <td>
                                                    <Link to={`/user/edit/${index+1}`} className = "btn btn-sm btn-primary">Edit</Link>
                                                    <Link to={`/user/edit/${index+1}`} className = "btn btn-sm btn-danger">Delete</Link>

                                                </td>
                                            </tr>
                                            })
                                        }
                                   
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Users