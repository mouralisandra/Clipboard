import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center">
      <div className="logo font-bold text-lg">
        <Link href="/" className="flex items-center space-x-0 md:space-x-3 text-red-500">
          <Image
            src={"/clipboard.png"}
            width={100}
            height={100}
            alt={"Logo"}
          ></Image>
          <span>Sandouras's Clipboard</span>
        </Link>
      </div>
      <div className="space-x-3">
        <Link href="/">List</Link>
        <Link href="/create" className="rounded-xl bg-red-500 p-2 px-3">+ Create</Link>
      </div>
    </nav>
  );
};

export default Navbar;
