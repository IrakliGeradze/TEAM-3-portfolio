import { useState } from "react";
import "./App.css";

const data = [
    {
        title: "Branding",
        items: [
        "Logo Design",
        "Brand Guidelines",
        "Collateral Design",
        "Rebranding Services",
        ],
    },
    {
        title: "UX/UI Designs",
        items: [
        "User Research and Analysis",
        "Wireframing and Prototyping",
        "User Interface Design",
        "User Experience Testing",
        "Responsive Design Solutions",
        ],
    },
    {
        title: "Web Development",
        items:[
            "Frontend Development",
            "Backend Development",
            "API Integration",
            "Database Management",
            "Responsive & Performance Optimization"
        ]
    },
    {
        title: "Motion & Animation",
        items: [
            "Motion Graphics Design",
            "Animated Explainer Videos",
            "Interactive Presentations"
        ],
    },
    {
        title: "Mobile",
        items: [
            "iOS App Development",
            "Android App Development",
            "App Prototyping and Testing",
            "App Maintenance and Updates"
        ],
    },
    ];
    export default function Services() {
    const [openIndex, setOpenIndex] = useState(1);
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="services">
        {data.map((section, index) => (
            <div
            key={index}
            className={`service-item ${
                openIndex === index ? "active" : ""
            }`}
            >
            <div className="service-header" onClick={() => toggle(index)}>
                <h2>{section.title}</h2>
                <div className={`arrow ${openIndex === index ? "open" : ""}`}>
                    🡣
                </div>
            </div>
            {openIndex === index && (
                <div className="service-content">
                {section.items.map((item, i) => (
                    <p key={i}>{item}</p>
                ))}
                </div>
            )}
            </div>
        ))}
        </div>
    );
}