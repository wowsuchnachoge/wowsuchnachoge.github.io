'use client';

import AppStoreButtons from "@/components/app_store_buttons";
import { KNC_AS_URL, KNC_GP_URL } from "@/components/constants";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar selectedMenuItem={0} />
      <section className="py-6 md:py-16 bg-gray-200 dark:bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Knots & Chaos 🎮</h2>
          <p className="mb-6">
            Classic tic-tac-toe... reimagined as a fast-paced digital battlefield.<br/>
            Play online, win matches, win XP, and unleash chaos with your friends!<br/>
            <b>Now available for iOS! (coming soon on Android)</b>
          </p>
          <a href="/projects/knc">
            <img src="/knc.png" alt="Knots & Chaos logo" className="max-w-3/4 mx-auto mb-6 md:max-w-sm shadow-md rounded-xl" />
          </a>
          <p className="mb-6 font-semibold text-2xl">
            ⬇️ Play now! ⬇️
          </p>
          <AppStoreButtons appStoreUrl={KNC_AS_URL} googlePlayUrl={KNC_GP_URL} />
        </div>
      </section>

      <section className="py-6 md:py-16  px-6 max-w-7xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-4">Hey, I'm Ignacio 👋</h1>
        <p className="text-lg mb-6">
          I’m a developer passionate about building playful and engaging digital experiences. I have experience in mobile and web development with technologies like: Flutter, React, Python and native development. Also, I have worked with cloud service providers such as AWS and with on-premise backend configuration for storage services, databases, lambdas, etc.
        </p>
        <p className="text-lg mb-6">
          I love building experiences that feel good to use and leave a memorable experience to the user when doing so — whether it's a mobile game or a clean UI.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            See my projects
          </a>
          <a href="/about" className="px-6 py-3 border border-green-600 text-green-600 rounded hover:bg-green-50">
            About me
          </a>
        </div>
      </section>

      <section className="py-6 md:py-16 px-6 max-w-7xl mx-auto text-left">
        <h1 className="text-4xl font-semibold mb-4">Let’s Connect! 🤝</h1>
        <p className="text-lg mb-6">Open to freelance work, indie collabs, app feedback, or if you just want to say hi.</p>
        <div className="flex justify-center gap-4">
          <a href="/contact" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}
