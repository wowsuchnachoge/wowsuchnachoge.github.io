interface AppStoreButtonsProps {
  readonly appStoreUrl: string;
  readonly googlePlayUrl: string;
  readonly buttonHeight?: string;
}

export default function AppStoreButtons({
  appStoreUrl,
  googlePlayUrl,
  buttonHeight = "h-12 md:h-14",
}: AppStoreButtonsProps) {
  return (
    <div className="flex justify-around md:justify-center gap-2 mb-6">
      <a href={appStoreUrl} target="_blank">
        <img src="/app_store_logo.svg" alt="Download on App Store" className={`shadow-md ${buttonHeight}`}/>
      </a>
      {/* <a href={googlePlayUrl} target="_blank">
        <img src="/google_play_logo.png" alt="Get it on Google Play" className={`shadow-md ${buttonHeight}`}/>
      </a> */}
    </div>
  );
}