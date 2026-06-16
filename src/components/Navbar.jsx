const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-800">
      <a href="#home" className="text-2xl font-bold text-cyan-400">
        MyPortfolio
      </a>

      <ul className="flex gap-8 text-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <a className="hover:text-cyan-400 cursor-pointer" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
