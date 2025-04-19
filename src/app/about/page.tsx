import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div>
      <Navbar selectedMenuItem={1} />
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div>
            <h2 className="text-4xl font-semibold mb-4">About me 🧑‍💻</h2>
            <p className="text-lg mb-6">
            Born and based in Mexico City 🇲🇽, I'm a mechatronics engineer who took a sharp turn into the coding world. By day, I work on the iOS and Android apps at Amazon Music 🎵, helping millions jam out on their phones.<br/><br/>

            By night - and random bursts of creative obsession - I dive into side projects built with Flutter, React, Python, and AWS, because why stick to one stack when you can try them all?<br/>
            I love building things that run smoothly, have personality and ideally make someone's life slightly easier - especially games, tools, or whatever makes tech feel a bit more playful (or useful).<br/><br/>
            
            When I’m not deep in code, I’m usually recharging with family time, getting lost in a new place, or chasing life’s underrated joys — like slowing down, eating something incredible, or sipping a good glass of wine 🍷.
            </p>
            <a href="/contact" className="px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700">
              Contact me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}