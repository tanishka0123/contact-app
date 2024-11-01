function Navbar() {
  return (
    <div className="m-4 flex h-[60px] items-center justify-center gap-2 rounded-lg bg-white text-2xl font-medium">
      <div className="flex gap-3">
        <img src="firebase.svg" />
        <h1>Firebase Contact App</h1>
      </div>
    </div>
  );
}

export default Navbar;
