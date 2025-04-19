import AppStoreButtons from "@/components/app_store_buttons";
import { KNC_AS_URL, KNC_GP_URL } from "@/components/constants";
import Navbar from "@/components/navbar";

export default function KNCTermsAndConditions() {
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
              <h2 className="text-4xl font-semibold mb-4">Terms & Conditions - Knots & Chaos 🎮</h2>
              <p className="text-lg mb-4">
                <b>Last updated:</b> April 19, 2025<br/><br/>

                By using the Knots & Chaos mobile application ("the App"), you agree to the following terms and conditions. If you do not agree, please do not use the App.<br/><br/>
              </p>
              <h2 className="text-2xl font-semibold mb-4">1. Use of the App</h2>
              <p className="text-lg mb-4">              The App is intended for personal, non-commercial entertainment use. You must not misuse the App or attempt to disrupt its functionality.
              </p>
              <h2 className="text-2xl font-semibold mb-4">2. User data</h2>
              <p className="text-lg mb-4">              
                The App may collect anonymous gameplay data, device information, and advertising identifiers. Use of the App is also subject to our <a href="/projects/knc/privacy-policy" className="text-green-500 hover:text-green-700">Privacy Policy</a>.
              </p>
              <h2 className="text-2xl font-semibold mb-4">3. In-App purchases and Ads</h2>
              <p className="text-lg mb-4">
              The App may contain advertisements and optional rewarded ads. In-app purchases or watching ads may provide virtual rewards, which have no monetary value outside the App.
              </p>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual property</h2>
              <p className="text-lg mb-4">
              All content, visuals, and branding within the App are the property of the developer and may not be reused or reproduced without permission.
              </p>
              <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
              <p className="text-lg mb-4">
              We reserve the right to terminate or restrict access to the App at any time, without notice, for any violation of these terms.
              </p>
              <h2 className="text-2xl font-semibold mb-4">6. Changes to these terms</h2>
              <p className="text-lg mb-4">
              We may update these Terms from time to time. Continued use of the App constitutes acceptance of any changes.
              </p>
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p className="text-lg mb-4">
              For any questions regarding these terms, please contact us at: <a href="mailto:contact.ihm.dev@gmail.com" className="text-green-500 hover:text-green-700">contact.ihm.dev@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}