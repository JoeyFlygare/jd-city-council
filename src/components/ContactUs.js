import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Please contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linkedin :<a href={resumeData.linkedinId}> Joey Flygare</a></h4>
              <h4><a href="https://docs.google.com/document/d/1iSJ3IFNhSmj7lQpyaoN8U1lIdUTCwIjsM_fkbonBGz4/edit?usp=sharing">Resume</a></h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
