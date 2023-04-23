import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 px-4 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <span className="text-blue-500">Next</span>JS
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/" className="text-gray-500 hover:text-gray-800">
          Home
        </Link>
        <Link href="/about" className="ml-4 text-gray-500 hover:text-gray-800">
          About
        </Link>
      </div>
    </header>
  );
};
