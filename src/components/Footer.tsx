import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="bg-black/10 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-300">
            © 2023 Zymatric. All rights reserved.
          </div>
          <div className="space-x-4">
            <Link
              to="/terms"
              className="text-sm text-gray-300 hover:text-white"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-300 hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
