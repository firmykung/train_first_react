import React, { Component } from 'react';
import './App.css';
import logo from './download.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Left">
          <div className="personal_info">
            <img className="profile-pic" src={logo} alt="logo" /><br/>
            Sirathee Kosit<br/>
            Firm<br/>
            18/46 onnut 80 prawet<br/>
            bangkok 10250<br/>
            Tel: 0944614162<br/>
            Mail: sirathee.kosit@gmail.com
          </div>
          <div className="title">Objective</div>
          <div>
            To work in the position of software engineer with a company specialising in computer software, to be in team that everyone specialise in their skills, to be cooperative with each other well, to be responsible for the team’s goals
          </div>
          <div className="title">Personal skill</div>
          <div>
            communication&presentation<br/>
            flexibility&adaptability<br/>
            leadership&responsibility<br/>
            teamwork
          </div>
          <div className="title">Activities</div>
          <div>
            Participated in the interlink campus tour 2016, Open Cabling Systems for the future
          </div>
        </div>
        <div className="App-Right">
          <div className="title">Education</div>
          <div>2014-2018 BACHELOR’S DEGREE IN INFORMATION ENGINEERING TECHNICAL SKILLS<br/>
          King’s Mongkut’s Institute of Technology Ladkrabang Bangkok, Thailand</div>
          <div>2011-2013 HIGH SCHOOL CERTIFICATE IN MATHEMATICS AND SCIENCE<br/>
          the demonstration school of ramkhamhaeng university, Thailand 
          </div>
          <div className="title">Experience</div>
          <div>
            june 2018 - current<br/>
            software-engineer 2 orcsoft Co. Ltd<br/><br/>
            june 2017 - december 2017<br/>
            internship and cooperative software engineer,Reuters software Limited
          </div>
          <div className="title">Technical skill</div>
          <div>
            programing language<br/>
            -Java,C#<br/>
            Technology<br/>
            -weblogic
          </div>
        </div>
      </div>
    );
  }
}

export default App;
