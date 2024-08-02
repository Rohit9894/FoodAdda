const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row py-3 justify-between mx-6">
      <div>
      <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0,16)}</h3>
      <h1 className="text-2xl font-bold">Food Adda</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="search here"
          autoComplete="off"
          className="p-3  border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
