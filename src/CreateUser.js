import React, {useContext, useState} from 'react'
import UserContext from './userContext';
import { useHistory } from 'react-router-dom';
function CreateUser(props) {
    const [userName, setUserName] = useState("");
    const [position, setPosition] = useState("");
    const [office, setOffice] = useState("");
    const [age, setAge] = useState("");
    const [startdate, setStartDate] = useState("");
    const [salary, setSalary] = useState("");
    
    const userContext = useContext(UserContext);
    const history = useHistory();

    let handleSubmit = (e) => {
            e.preventDefault();
            let userData = {userName, position, office, age, startdate, salary};
            userContext.setUserList = ([...userContext.userList, {userData}]);
            history.push("/user");
    }

    return (
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create User</h1>
            </div>

            <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <label>Username</label>
                    <input type="text" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Position</label>
                    <input type="text" name="mobile" value={position} onChange={(e) => setPosition(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Office</label>
                    <input type="text" name="email" value={office} onChange={(e) => setOffice(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Age</label>
                    <input type="text" name="email" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Start Date</label>
                    <input type="date" name="email" value={startdate} onChange={(e) => setStartDate(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Salary</label>
                    <input type="text" name="email" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <input  type="submit" value="Submit" className="btn btn-primary" onClick={handleSubmit} />
                </div>
            </div>
            </form>
        </div>
        </div>
        
        );
    }

        
export default CreateUser
