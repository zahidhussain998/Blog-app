import Image from "next/image";
import Link from "next/link";

export default function Header() {
 
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
      
        <Link href="/">
  <h1 className="text-2xl">
    <span className="text-white">Radiant</span>{" "}
    <span className="text-[#0A7DFF]">Pulse</span>
  </h1>
</Link>
      </div>

      <div>
        <Link
          href="/contact"
          className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#0A7DFF] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out hover:shadow-[#0A7DFF] hover:before:h-56 hover:before:w-56 text-white rounded-full"
        >
        <span className="relative z-10"> 
        Contact Us
          </span> 
        </Link>
      </div>

</header>
  );
}

        
//  <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
{/* <span class="relative z-10">Circle hover</span>
</button>// */}
