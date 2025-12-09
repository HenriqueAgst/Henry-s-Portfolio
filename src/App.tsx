import { Content } from "./components/content";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <Skills />
      <Projects />
    </div>
  );
}
