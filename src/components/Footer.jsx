function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 px-10 py-6 text-center text-gray-400">
      <p className="text-sm">
        © {year} Sai Ganesh. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
