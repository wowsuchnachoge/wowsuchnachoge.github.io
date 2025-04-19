import AppStoreButtons from "@/components/app_store_buttons";
import { KNC_AS_URL, KNC_GP_URL } from "@/components/constants";
import Navbar from "@/components/navbar";
import { ProjectOverview, ProjectOverviewProps } from "@/components/project_overview";

const projects: ProjectOverviewProps[] = [
  {
    title: "Knots & Chaos 🎮",
    description: `
      Classic tic-tac-toe... reimagined as a fast-paced digital battlefield. Play online, win matches, win XP, and unleash chaos with your friends!`,
    imageUrl: "knc.png",
    linkUrl: "/projects/knc",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar selectedMenuItem={2} />
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* <div className="flex-shrink-0 portrait:hidden">
            <img
              src="/projects.jpg"
              alt="IHM"
              className="w-60 h-60 rounded-xl mt-6 md:mt-0 object-cover "
            />
          </div> */}
          <div>
            <h2 className="text-4xl font-semibold">Projects 🛠️</h2>
            {projects.map((project) => (
              <ProjectOverview key={project.title} title={project.title} description={project.description} imageUrl={project.imageUrl} linkUrl={project.linkUrl} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}