import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar selectedMenuItem={3} />
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* <div className="flex-shrink-0">
            <img
              src="/doggos.png"
              alt="IHM"
              className="w-60 h-60 rounded-xl mt-6 md:mt-0 object-cover shadow-md"
            />
          </div> */}
          <div>
            <h2 className="text-4xl font-semibold mb-4">Contact 📫</h2>
            <h4 className="text-xl font-semibold mb-2">How can I help you?</h4>
            <p className="text-lg mb-6">
              Whether it’s feedback, support, or you just want to say hi —
              shoot me an email! I’ll reply as soon as I can (promise, no robot responses 🤖).
            </p>
            <a href="mailto:ignacio.hernandez.monroy@gmail.com" className="px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700">
              Send email 📧
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}