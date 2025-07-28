import Header from "components/Header";
import type { Route } from "./+types/home";
import Welcome from "~/welcome/welcome";
import Footer from "components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "multi format image" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}
