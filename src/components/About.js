import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-neutral-900 text-black dark:text-white py-20 px-6 sm:px-10 md:px-20 border-t border-gray-300 dark:border-neutral-700"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/profile.jpg"
              alt="Krithika Gattu"
              width={300}
              height={300}
              className="rounded-3xl object-cover border-4 border-indigo-500"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center gap-6 max-w-xl">
            {/* Experience & Education */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="border border-gray-400 dark:border-white rounded-3xl p-6 text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">🎯 Experience</h3>
                <p className="text-base md:text-lg text-gray-600">PwC Intern</p>
              </div>
              <div className="border border-gray-400 dark:border-white rounded-3xl p-6 text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">🎓 Education</h3>
                <p className="text-base md:text-lg text-gray-600">B.Tech - ECE</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-base sm:text-base md:text-2xl text-gray-700 leading-relaxed mb-6">
              I&apos;m Krithika Gattu, a dedicated Computer Science and Engineering student with a
              strong passion for AI, data science, and web development. I love translating
              ideas into real-world applications and have explored domains like frontend dev,
              resume intelligence, internship tracking, and career automation through my
              projects. With hands-on experience in Python, Streamlit, and Salesforce, I&apos;m
              always excited to build impactful tech!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
