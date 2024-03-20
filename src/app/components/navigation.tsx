import Link from "next/link";

export function Navigation() {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/">
              <p className="text-black hover:text-gray-700">home</p>
            </Link>
            <Link href="/projects">
              <p className="text-black hover:text-gray-700">ProjectList</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
