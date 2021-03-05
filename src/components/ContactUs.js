import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Please contact me with suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linkedin :<a href={resumeData.linkedinId}> JD Elquist</a></h4>
              <h4>Email : <a>Jd@jd.co</a></h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
