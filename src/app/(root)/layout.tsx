import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import { Urbanist, Kalam, Exo_2, Ubuntu, Inter } from "next/font/google";
import Link from "next/link";

const urbanist = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${urbanist.className}`}>
      <body>
        {/* navigation */}
        <div>
          <Navigation />
        </div>
        {/* main content */}
        <div>{children}</div>
        {/* footer */}

        <footer className="bg-gray-50 border-t border-gray-200 md:mt-10 mt-6">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {/* Brand */}
              <div>
                <h2
                  className="text-2xl font-extrabold text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(140deg, #2ad8a4 0.91%, #34bb93 100.57%)",
                  }}
                >
                  <Logo />
                </h2>
                <p className="text-gray-900 mt-3 text-sm">
                  One travel app to replace them all. Plan, budget, and explore
                  with ease.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="my_trips"
                      className="hover:text-green-500 transition"
                    >
                      My Trips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/plan_trip"
                      className="hover:text-green-500 transition"
                    >
                      Plan Your Trip
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-green-500 transition"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-green-500 transition"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-green-500 transition"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="hover:text-green-500 transition"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-green-500 transition"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Stay Updated
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Subscribe to get travel tips and app updates.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white font-semibold rounded-r-md"
                    style={{
                      background:
                        "linear-gradient(140deg, #2ad8a4 0.91%, #34bb93 100.57%)",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Travelo. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <Link href="#" className="hover:text-green-500 transition">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-green-500 transition">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
