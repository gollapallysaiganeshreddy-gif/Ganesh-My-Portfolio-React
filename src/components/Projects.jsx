function Projects() {

  const projects = [
    {title:"IPL Website", tech:"React + CSS"},
    {title:"Task Manager", tech:"React + Node"},
    {title:"Portfolio Website", tech:"React + Tailwind"}
  ]

  return (
    <section id="projects" className="py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((p,index)=>(
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-400">{p.tech}</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects
