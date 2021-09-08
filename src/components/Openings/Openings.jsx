import Table from "../TableGrid/TableGrid";

import downArrow from "../../images/down-arrow.png";
import "./openings.css";

const Openings = () => {
  const columns = [
    {
      id: 1,
      label: "Role",
    },
    {
      id: 2,
      label: "Location",
    },
    {
      id: 3,
      label: "Exp.",
    },
    {
      id: 4,
      label: "Type",
    },
    {
      id: 5,
      label: "",
    },
  ];
  const rows = [
    {
      id: 1,
      role: "PHP JEDi",
      location: "Pune",
      exp: "4-7 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 2,
      role: "Data Engineer-Bigdata",
      location: "Pune",
      exp: "2-4 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 3,
      role: "PHP Samurai",
      location: "Pune",
      exp: "2-4 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 4,
      role: "Associate DBA-PostgreSQL",
      location: "Pune",
      exp: "1-4 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 5,
      role: "Senior-PHP+ReactJs",
      location: "Pune",
      exp: "4-7 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 6,
      role: "Principle Engineer-PHP",
      location: "Pune",
      exp: "5-10 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 7,
      role: "Software Engineer-PHP+ReactJs",
      location: "Pune",
      exp: "1-4 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 8,
      role: "Senior Engineer-Android",
      location: "Pune",
      exp: "4-7 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 9,
      role: "Senior Engineer-iOS",
      location: "Pune",
      exp: "4-7 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 10,
      role: "PHP Ninja",
      location: "Pune",
      exp: "1-2 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
    {
      id: 11,
      role: "JavaScript Developer",
      location: "Pune",
      exp: "2-4 Yrs",
      type: "Full time",
      action: <img src={downArrow} alt="action" />,
    },
  ];

  return (
    <div className="opening-container">
      <div className="heading">
        <h1>Current Openings</h1>
      </div>
      <div className="titles">
        <span className="title">All</span>
        <span className="title">Web (PHP l DB)</span>
        <span className="title">Quality Testing</span>
        <span className="title">Others</span>
      </div>
      <div className="table-main">
        <Table rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Openings;
