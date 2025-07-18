import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", logo: "/assets/skills/python.png" },
        { name: "Java", logo: "/assets/skills/java.png" },
        { name: "C", logo: "/assets/skills/c.png" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", logo: "/assets/skills/react.png" },
        { name: "Tailwind CSS", logo: "/assets/skills/tailwind.png" },
        { name: "Streamlit", logo: "/assets/skills/streamlit.png" },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "Pandas", logo: "/assets/skills/pandas.png" },
        { name: "OpenAI", logo: "/assets/skills/openai.png" },
        { name: "Scikit-learn", logo: "/assets/skills/sklearn.png" },
      ],
    },
    {
      category: "Platforms",
      items: [
        { name: "Salesforce", logo: "/assets/skills/salesforce.png" },
        { name: "GitHub", logo: "/assets/skills/github.png" },
        { name: "Vercel", logo: "/assets/skills/vercel.png" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-neutral-100 text-indigo-600 py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black-600 mb-12">Skills</h2>

        <div className="space-y-16">
          {skills.map((group, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-indigo-500 mb-6">{group.category}</h3>
<div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {group.items.map((skill, idx) => (
      <div
        key={idx}
        className="bg-white shadow-lg rounded-xl p-4 w-56 h-56 flex flex-col items-center justify-center hover:shadow-2xl transition duration-300"
      >
        <Image
          src={skill.logo}
          alt={skill.name}
          width={120}
          height={120}
          className="mb-2 object-contain"
        />
        <span className="text-sm font-medium mt-2">{skill.name}</span>
      </div>
    ))}
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
