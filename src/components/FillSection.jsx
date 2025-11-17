import personalInfoIcon from "../assets/personal-info.svg";
import summaryIcon from "../assets/summary.svg";
import workExperiencIcon from "../assets/work-experience.svg";
import educationIcon from "../assets/education.svg";
import languageIcon from "../assets/language.svg";
import areaOfExpertiseIcon from "../assets/area-of-expertise.svg";
import courseIcon from "../assets/course.svg";
import computerSkillsIcon from "../assets/computer-skills.svg";

const sections = [
  {
    title: "Personal Info",
    icon: personalInfoIcon,
    step: 1,
  },
  {
    title: "Summary",
    icon: summaryIcon,
    step: 2,
  },
  {
    title: "Work Experience",
    icon: workExperiencIcon,
    step: 3,
  },
  {
    title: "Education",
    icon: educationIcon,
    step: 4,
  },
  {
    title: "Language",
    icon: languageIcon,
    step: 5,
  },
  {
    title: "Area of Expertise",
    icon: areaOfExpertiseIcon,
    step: 6,
  },
  {
    title: "Course",
    icon: courseIcon,
    step: 7,
  },
  {
    title: "Computer Skills",
    icon: computerSkillsIcon,
    step: 8,
  },
];

export default function FillSection({ step, setStep }) {
  return (
    <div className="bg-white w-100 text-center shadow-lg p-4">
      <h3 className="font-extrabold text-2xl mb-3">Fill Section</h3>
      <p className="font-light mb-10">Select the section</p>
      <div className="grid grid-cols-2 gap-10">
        {sections.map((section) => (
          <button
            onClick={() => setStep(section.step)}
            key={section.step}
            className={`p-8 shadow-md flex flex-col items-center justify-center gap-3 cursor-pointer ${
              step === section.step && "shadow-xl"
            } hover:shadow-2xl transition-shadow duration-300`}
          >
            <img src={section.icon} alt={section.title} />
            <p className="text-xs">{section.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
