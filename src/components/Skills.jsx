function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind"
  ]

  return (
    <section id="skills" className="py-20 text-center">

      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-20">

        {skills.map((skill,index)=>(
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills
