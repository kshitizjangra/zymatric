import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            Welcome to Zymatric
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Your gateway to interactive mathematics
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-10 pr-3 text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-10 pr-3 text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-teal-400 hover:text-teal-300"
              >
                Forgot your password?
              </a>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-teal-400 hover:text-teal-300"
              >
                Sign up
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ArrowRight className="h-5 w-5" />
            </span>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
