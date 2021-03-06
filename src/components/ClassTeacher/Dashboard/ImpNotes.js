import React from "react";
import "./ImpNotes.css";
import ImpNotesData from "./ImpNotesData";

function ImpNotes(props) {
  return (
    <div className="LecturesInWeek">
      <div className="box row">
        <h3 className="liwTitle">Important Notes</h3>

        <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-center">
          {ImpNotesData.map((Lectures) => {
            return (
              <div className="ttw1">
                <p>
                  <b>{Lectures.subjectName}</b> <br /> 
                  {Lectures.dayAndTime[0]} <br /> 
                  {Lectures.dayAndTime[1]} <br />
                  {Lectures.dayAndTime[2]} <br />
                  {Lectures.dayAndTime[3]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImpNotes;
