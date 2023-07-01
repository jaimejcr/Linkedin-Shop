import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Content} from "../src/components/Cards.jsx";
export const people = [
  {
    name: "Reginauld Heckner",
    rating: 3,
    gender: "Male",
    job: "Senior Developer",
    city: "Leiden",
  },
  {
    name: "Glyn Deackes",
    rating: 4,
    gender: "Female",
    job: "Quality Control Specialist",
    city: "‘Akko",
  },
  {
    name: "Jordan Pearlman",
    rating: 4,
    gender: "Female",
    job: "Librarian",
    city: "Červená Voda",
  },
  {
    name: "Sabine Kemell",
    rating: 3,
    gender: "Female",
    job: "Analog Circuit Design manager",
    city: "Telč",
  },
  {
    name: "Yehudit Wenn",
    rating: 4,
    gender: "Male",
    job: "Developer I",
    city: "Fiorentino",
  },
  {
    name: "Dewain Sambedge",
    rating: 1,
    gender: "Male",
    job: "Actuary",
    city: "Huyunxiang",
  },
  {
    name: "Jerrome Conville",
    rating: 3,
    gender: "Bigender",
    job: "Associate Professor",
    city: "Ōzu",
  },
  {
    name: "Bev Dupey",
    rating: 1,
    gender: "Female",
    job: "Research Associate",
    city: "Cikawung",
  },
  {
    name: "Eldredge Dimmer",
    rating: 4,
    gender: "Male",
    job: "Web Developer II",
    city: "Yancheng",
  },
  {
    name: "Lauri Aberchirder",
    rating: 3,
    gender: "Female",
    job: "Human Resources Assistant IV",
    city: "Miskindzha",
  },
  {
    name: "Spike Mazzey",
    rating: 2,
    gender: "Male",
    job: "Chief Design Engineer",
    city: "Kristianstad",
  },
  {
    name: "Natka Semechik",
    rating: 4,
    gender: "Female",
    job: "Speech Pathologist",
    city: "Itinga",
  },
  {
    name: "Izaak Wildman",
    rating: 3,
    gender: "Male",
    job: "Business Systems Development Analyst",
    city: "Chaiyaphum",
  },
  {
    name: "Berton Sancias",
    rating: 4,
    gender: "Non-binary",
    job: "Electrical Engineer",
    city: "San Pedro Ayampuc",
  },
  {
    name: "Trisha Snewin",
    rating: 1,
    gender: "Female",
    job: "Assistant Media Planner",
    city: "Guruyan",
  },
  {
    name: "Augustine O'Hickey",
    rating: 2,
    gender: "Male",
    job: "Senior Quality Engineer",
    city: "Goianira",
  },
  {
    name: "Yelena Zmitrovich",
    rating: 2,
    gender: "Female",
    job: "Help Desk Technician",
    city: "Nanjiao",
  },
  {
    name: "Bertha McIleen",
    rating: 2,
    gender: "Female",
    job: "Accounting Assistant I",
    city: "Nowshera",
  },
  {
    name: "Artemas Foan",
    rating: 4,
    gender: "Male",
    job: "Media Manager IV",
    city: "Karangtalun",
  },
  {
    name: "Arthur Wareing",
    rating: 4,
    gender: "Male",
    job: "Food Chemist",
    city: "Benito Juarez",
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

function app() {
  return (
    <div className="container" >
      {people.map (card => {
        return <Content card={card}/>
      })}
    </div>
  )
}
root.render(app());
