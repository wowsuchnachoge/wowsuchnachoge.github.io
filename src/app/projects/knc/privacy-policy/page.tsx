import AppStoreButtons from "@/components/app_store_buttons";
import { KNC_AS_URL, KNC_GP_URL } from "@/components/constants";
import Navbar from "@/components/navbar";

export default function KNCPrivacyPolicy() {
  return (
    <div>
      <Navbar selectedMenuItem={2} />
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left side */}
          <div className="flex-shrink-0">
            <img
              src="/knc.png"
              alt="Knots & Chaos logo"
              className="w-60 h-60 rounded-xl mt-6 md:mt-0 object-cover shadow-md mb-4"
            />
            <AppStoreButtons appStoreUrl={KNC_AS_URL} googlePlayUrl={KNC_GP_URL} buttonHeight="h-9" />
          </div>
          {/* Right side */}
          <div>
            <section className="mb-6">
              <h2 className="text-4xl font-semibold mb-4">Privacy Policy - Knots & Chaos 🎮</h2>
              <p className="text-lg mb-4">
                <b>Last updated:</b> April 19, 2025<br/><br/>

                Knots & Chaos (“the App”) is a mobile game developed by Ignacio Hernández. This Privacy Policy explains how we collect, use, and protect your information.              
              </p>
              <h2 className="text-2xl font-semibold mb-4">1. Information we collect</h2>
              <p className="text-lg mb-4">
              We may collect the following data:
              </p>
              <ul className="text-lg mb-4">
                <li>- Anonymous device information (e.g., device model, OS version)</li>
                <li>- Gameplay actions and scores (for analytics and game progression)</li>
                <li>- Advertising identifiers (for rewarded ads and ad personalization)</li>
                <li>- Push notification tokens (to send game updates)</li>
              </ul>
              <h2 className="text-2xl font-semibold mb-4">2. How we use the information</h2>
              <p className="text-lg mb-4">
                The information is used to:
              </p>
              <ul className="text-lg mb-4">
                <li>- Provide online gameplay and matchmaking</li>
                <li>- Improve game features and stability</li>
                <li>- Deliver push notifications</li>
                <li>- Show relevant ads and allow rewarded ad functionality</li>
              </ul>
              <h2 className="text-2xl font-semibold mb-4">3. Third-Party services</h2>
              <p className="text-lg mb-4">
                We use the following third-party services:
              </p>
              <ul className="text-lg mb-4">
                <li>- AWS Amplify & Pinpoint (backend, notifications)</li>
                <li>- Google AdMob (rewarded ads, banners)</li>
              </ul>
              <p className="text-lg mb-4">
                These services may collect and process data under their own privacy policies.
              </p>
              <h2 className="text-2xl font-semibold mb-4">4. Your choices</h2>
              <p className="text-lg mb-4">
                You may:
              </p>
              <ul className="text-lg mb-4">
                <li>Disable ad personalization through your device settings</li>
                <li>Decline or skip watching rewarded ads</li>
                <li>Opt out of push notifications</li>
              </ul>
              <h2 className="text-2xl font-semibold mb-4">5. Data protection</h2>
              <p className="text-lg mb-4">
                We follow industry-standard practices to secure your data. No personal data is stored directly by the app.
              </p>
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p className="text-lg mb-4">
                If you have any questions, please contact us at: <a href="mailto:contact.ihm.dev@gmail.com" className="text-green-500 hover:text-green-700">contact.ihm.dev@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}