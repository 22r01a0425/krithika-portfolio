import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      title: "AI & ML Virtual Internship",
      subtitle: "Apr – Jun 2024",
      logo: "/assets/certifications/aiml.png",
    },
    {
      title: "Python Course Completion",
      subtitle: "Basics of Python",
      logo: "/assets/certifications/python.png",
    },
    {
      title: "C Course Completion",
      subtitle: "Basics of C",
      logo: "/assets/certifications/c.png",
    },
    {
      title: "Cybersecurity Analyst – Tata",
      subtitle: "via Forage",
      logo: "/assets/certifications/cybersecurity.png",
    },
    {
      title: "Deloitte Data Analytics",
      subtitle: "Forage – June 2025",
      logo: "/assets/certifications/deloitte.png",
    },
    {
      title: "Tata Data Visualisation",
      subtitle: "Forage – July 2025",
      logo: "/assets/certifications/tata.png",
    },
  ];

  return (
    <section
      id="certifications"
      className="scroll-mt-24 bg-white-100 dark:bg-white py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-12">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {certs.map((cert, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {/* Card */}
              <div className="w-80 h-80 bg-white dark:bg-neutral-800 shadow-lg rounded-xl overflow-hidden flex items-center justify-center p-4 hover:shadow-2xl transition duration-300">
                <Image
                  src={cert.logo}
                  alt={cert.title}
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Title & subtitle outside the card */}
              <div className="text-center">
                <p className="text-lg font-semibold text-black dark:text-white">{cert.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
