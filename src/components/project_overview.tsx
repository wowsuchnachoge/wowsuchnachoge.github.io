import Link from "next/link";
import AppStoreButtons from "./app_store_buttons";

export interface ProjectOverviewProps {
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly linkUrl: string;
}

export function ProjectOverview(props: ProjectOverviewProps) {
  return (
    <section className="py-4 max-w-7xl mx-auto">
      <Link href={props.linkUrl}>
        <div className="flex flex-col shadow-md p-6 md:p-8 md:flex-row items-center gap-8 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl">
        
          {/* 👤 Left-side image */}
          <div className="flex-shrink-0">
            <img
              src={props.imageUrl}
              alt={props.title}
              className="w-60 h-60 rounded-xl mt-6 md:mt-0 object-cover shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-4xl font-semibold mb-6">{props.title}</h2>
            <p className="text-lg mb-6">
                {props.description}
            </p>
            <p className="text-green-500 hover:text-green-700">See more →</p>
          </div>
        </div>
      </Link>
    </section>
  );
}