export interface ScreenshotGalleryProps {
  readonly images: string[];
}

export default function ScreenshotGallery(props: ScreenshotGalleryProps) {
  return (
    <section className="mb-6">
      <h2 className="text-4xl font-semibold mb-4">App screenshots</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {props.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-64 h-auto rounded shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
