export default function Home() {
  return (
    <main
      className="bg-gray-100 h-screen flex items-center justify-center p-
    sm:bg-red-100 md:bg-green-100"
    >
      <div
        className="bg-white w-full shadow-lg p-5 rounded-3xl 
      max-w-screen-sm flex flex-col gap-2 md:flex-row"
      >
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 
          outline-none ring ring-transparent placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button
          className="bg-black bg-opacity-85 text-white rounded-full 
        focus:scale-90 active:scale-90 transition-transform font-medium 
        outline-none md:px-10"
        >
          Search
        </button>
      </div>
    </main>
  );
}
