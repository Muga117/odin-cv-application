import { useState } from "react";
import "../styles/App.css";
import pfp from "../assets/pfp.jpg";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [eduDateFrom, setEduDateFrom] = useState("");
  const [eduDateUntil, setEduDateUntil] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [companyDateFrom, setCompanyDateFrom] = useState("");
  const [companyDateUntil, setCompanyDateUntil] = useState("");

  const [showForm, setShowForm] = useState(true);
  const [showCV, setShowCV] = useState(false);

  const submitOnClick = (event) => {
    event.preventDefault();
    const form = document.querySelector("#cv-form");
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    setShowForm(false);
    setShowCV(true);
  };

  const editBtnOnClick = () => {
    setShowCV(false);
    setShowForm(true);
  };

  if (showForm) {
    return (
      <form id="cv-form">
        <fieldset id="generalInformation">
          <legend>General Information</legend>
          <label>
            Name
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Phone
            <input
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </fieldset>

        <fieldset id="educationalExperience">
          <legend>Educational Experience</legend>
          <label>
            School
            <input
              id="school"
              name="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </label>

          <label>
            Title Of Study
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Date From
            <input
              id="eduDateFrom"
              name="edu-date-from"
              type="date"
              value={eduDateFrom}
              onChange={(e) => setEduDateFrom(e.target.value)}
            />
          </label>

          <label>
            Date Until
            <input
              id="eduDateUntil"
              name="edu-date-until"
              type="date"
              value={eduDateUntil}
              onChange={(e) => setEduDateUntil(e.target.value)}
            />
          </label>
        </fieldset>

        <fieldset id="practicalExperience">
          <legend>Practical Experience</legend>
          <label>
            Company
            <input
              id="company"
              name="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>

          <label>
            position
            <input
              id="position"
              name="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </label>

          <label>
            Main responsibilities
            <input
              id="responsibilities"
              name="responsibilities"
              type="text"
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
            ></input>
          </label>

          <label>
            Date From
            <input
              id="companyDateFrom"
              name="companyDateFrom"
              type="date"
              value={companyDateFrom}
              onChange={(e) => setCompanyDateFrom(e.target.value)}
            ></input>
          </label>

          <label>
            Date Until
            <input
              id="companyDateUntil"
              name="companyDateUntil"
              type="date"
              value={companyDateUntil}
              onChange={(e) => setCompanyDateUntil(e.target.value)}
            ></input>
          </label>
        </fieldset>

        <button type="submit" onClick={submitOnClick}>
          Submit
        </button>
      </form>
    );
  }

  if (showCV) {
    return (
      <div className="curriculum-vitae">
        <h1>Curriculum Vitae</h1>
        <button className="edit" onClick={editBtnOnClick}>
          Edit
        </button>
        <div className="container">
          <section class="general-information">
            <img class="pfp" src={pfp} />
            <p>{email}</p>
            <p>{phone}</p>
          </section>
          <section className="experience">
            <h1>{name}</h1>
            <h2>Experience</h2>
            <p>
              {position} | {companyDateFrom} - {companyDateUntil}{" "}
            </p>
            <p>{company}</p>
            <p>{responsibilities}</p>

            <h2>Education</h2>
            <p>
              {title} | {eduDateFrom} - {eduDateUntil} | {school}
            </p>
          </section>
        </div>
      </div>
    );
  }

  return <></>;
}
