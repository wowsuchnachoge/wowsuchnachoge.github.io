import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-gray-500 py-4">
      <div className="text-center space-y-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ignacio Hernández Monroy<br/>Made with 💻 and ❤️ in Mexico</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/wowsuchnachoge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-ignacio-hernandez-monroy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
          href="mailto:ignacio.hernandez.monroy@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-700 transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}