import AppStoreButtons from "@/components/app_store_buttons";
import { KNC_AS_URL, KNC_GP_URL } from "@/components/constants";
import Navbar from "@/components/navbar";
import ScreenshotGallery from "@/components/screenshot_gallery";

const knc_images = [
  '/1stScreen.png',
  '/2ndScreen.png',
  '/3rdScreen.png',
  '/4thScreen.png',
];

export default function KNC() {
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
              <h2 className="text-4xl font-semibold mb-4">Knots & Chaos 🎮</h2>
              <p className="text-lg">
                Classic tic-tac-toe... reimagined as a fast-paced digital battlefield.<br/>
                Play online, win matches, win XP, and unleash chaos with your friends!<br/><br/>

                <b>Play online 1v1 matches, rack up points with every win.</b><br/><br/>

                If you’re going to play tic-tac-toe in 2025, at least make it awesome.<br/><br/>

                This isn’t a game for overthinking. It’s for having fun, wasting time beautifully, and humbling your friends with sharp moves.<br/><br/>

                <b>Perfect For:</b><br/>
                  - Friendly rivalries with actual consequences<br/>
                  - Feeling competitive without a 3-hour commitment<br/>
                  - Nostalgia with attitude and just enough ego fuel<br/><br/>

                <b>Features:</b><br/>
                  - Fast-paced online 1v1 matches<br/>
                  - Reward system: win matches, earn XP<br/>
                  - Designed for short sessions and casual mayhem<br/>
                  - No elite rankings. Just fun and flair.<br/>
              </p>
            </section>
            <ScreenshotGallery images={knc_images} />
            <section className="mb-6 flex flex-col items-left">
              <h2 className="text-4xl font-semibold mb-4">App information</h2>
              <a href="/projects/knc/privacy-policy" className="text-green-500 hover:text-green-700 mb-4">
                Privacy policy →
              </a>
              <a href="/projects/knc/terms-and-conditions" className="text-green-500 hover:text-green-700 mb-4">
                Terms & conditions →
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}