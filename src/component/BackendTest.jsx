import React, { Component } from 'react';
const axios = require('axios');
// https://backend-services.herokuapp.com/journalRoot/
// signup?email=test2@test.com&username=test2&password=test2
// login?email=test%201%20email&username=test%201%20username&password=test%201%20password
// saveEntry?email=tes%201%20email&username=test%201%20username&entry=test%20entry&time=now&longitude=1&latitude=1
// getEntries?email=test%202%20email&username=test%202%20username
class BackendTest extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            signupResult:'',
            loginResult:'',
            saveEntryResult:'',
            getEntriesResul:''
        };
        this.baseURL = 'https://backend-services.herokuapp.com/journalRoot/';
        this.signupTest = this.signupTest.bind(this);
        this.loginTest = this.loginTest.bind(this);
        this.saveEntryTest = this.saveEntryTest.bind(this);
        this.getEntriesTest = this.getEntriesTest.bind(this);        
    }
    signupTest(email,username,password)
    {
        // signup?email=test2@test.com&username=test2&password=test2
        // result expected: "sucess"
        let url = this.baseURL + `signup?email=${email}&username=${username}&password=${password}`;
        //console.log(url);
        axios.get(url)
        .then( (res) =>
        {
            //console.log(res);
            if( res.data == 'sucess')
            {
                this.setState({signupResult:res.data})
            }
        })
        .catch( (err) =>
        {
            console.log(err);
        })
        .then( () =>
        {
            //console.log('done');
        });
    }
    loginTest(email,username,password)
    {
        // login?email=test%201%20email&username=test%201%20username&password=test%201%20password
        let url = this.baseURL + `login?email=${email}&username=${username}&password=${password}`;
        //console.log(url);
        axios.get(url)
        .then( (res) =>
        {
            //console.log(res.data.results);
            if( res.data.results.length > 0)
            {
                
                this.setState({loginResult:JSON.stringify(res.data.results)})
            }
        })
        .catch( (err) =>
        {
            console.log(err);
        })
        .then( () =>
        {
            //console.log('done');
        });
    }
    saveEntryTest(email,username,entry,time,longitude,latitude)
    {
        // saveEntry?email=tes%201%20email&username=test%201%20username&entry=test%20entry&time=now&longitude=1&latitude=1
        let url = this.baseURL + `saveEntry?email=${email}&username=${username}&entry=${entry}&time=${time}&longitude=${longitude}&latitude=${latitude}`;
        //console.log(url);
        axios.get(url)
        .then( (res) =>
        {
            //console.log(res);
            if( res.data == 'sucess')
            {
                
                this.setState({loginResult:res.data});
            }
        })
        .catch( (err) =>
        {
            console.log(err);
        })
        .then( () =>
        {
            //console.log('done');
        });
    }
    getEntriesTest(email,username)
    {
        // getEntries?email=test%202%20email&username=test%202%20username
        let url = this.baseURL + `getEntries?email=${email}&username=${username}`;
        //console.log(url);
        axios.get(url)
        .then( (res) =>
        {
            //console.log(res.data.results);
            if( res.data )
            {
                
                this.setState({loginResult:JSON.stringify(res.data.results)})
            }
        })
        .catch( (err) =>
        {
            console.log(err);
        })
        .then( () =>
        {
            //console.log('done');
        });
    }
    render() 
    {
        let email, username, password, entry, time,longitude, latitude;
        return (
            <div>
                <div>
                    <h3>Sign Up Test!</h3>
                    <label >email</label>
                    <input type="text" onKeyUp={(e) =>{email = e.target.value;}}/>
                    <label >username</label>
                    <input type="text" onKeyUp={(e) =>{username = e.target.value;}} />
                    <label >password</label>
                    <input type="text" onKeyUp={(e) =>{password = e.target.value;}} />
                    <button onClick={()=>{this.signupTest(email,username,password);}}>Test</button>
                </div>
                <div>
                    <h3>Login Test!</h3>
                    <label >email</label>
                    <input type="text" onKeyUp={(e) =>{email = e.target.value;}} />
                    <label >username</label>
                    <input type="text" onKeyUp={(e) =>{username = e.target.value;}} />
                    <label >password</label>
                    <input type="text" onKeyUp={(e) =>{password = e.target.value;}} />
                    <button onClick={()=>{this.loginTest(email,username,password);}}>Test</button>
                </div>
                <div>
                    <h3>Save Entry Test!</h3>
                    <label >email</label>
                    <input type="text" onKeyUp={(e) =>{email = e.target.value;}} />
                    <label >username</label>
                    <input type="text" onKeyUp={(e) =>{username = e.target.value;}} />
                    <label >entry</label>
                    <input type="text" onKeyUp={(e) =>{entry = e.target.value;}} />
                    <label >time</label>
                    <input type="text" onKeyUp={(e) =>{time = e.target.value;}} />
                    <label >longitude</label>
                    <input type="text" onKeyUp={(e) =>{longitude = e.target.value;}} />
                    <label >latitude</label>
                    <input type="text" onKeyUp={(e) =>{latitude = e.target.value;}} />
                    <button onClick={()=>{this.saveEntryTest(email,username,entry,time,longitude,latitude);}}>Test</button>
                </div>
                <div>
                    <h3>Get Entry Test!</h3>
                    <label >email</label>
                    <input type="text" onKeyUp={(e) =>{email = e.target.value;}} />
                    <label >username</label>
                    <input type="text" onKeyUp={(e) =>{username = e.target.value;}} />
                    <button onClick={()=>{this.getEntriesTest(email,username);}}>Test</button>
                </div>
                <div>
                    <h3>Result!</h3>
                    <p>signupResult : {this.state.signupResult}</p>
                    <p>loginResult : {this.state.loginResult}</p>
                    <p>saveEntryResult : {this.state.saveEntryResult}</p>
                    <p>getEntriesResul : {this.state.getEntriesResul}</p>
                </div>
            </div>
        );
    }
}

export default BackendTest;
