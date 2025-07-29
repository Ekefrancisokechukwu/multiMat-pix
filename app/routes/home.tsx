import Header from "components/Header";
import type { Route } from "./+types/home";
import Footer from "components/Footer";
import Welcome from "~/welcome/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Convert Images to Multiple Formats | Multi Format Image" },
    {
      name: "description",
      content:
        "Upload your image and convert it to WebP, PNG, JPEG and more. Free and fast online image format converter.",
    },
    {
      name: "keywords",
      content:
        "image converter, webp, png, jpeg, image format, online converter",
    },
    { property: "og:title", content: "Multi Format Image Converter" },
    {
      property: "og:description",
      content:
        "Free tool to convert your image to WebP, PNG, JPEG and other formats instantly.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://multi-mat-pix.vercel.app/" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Multi Format Image Converter" },
    {
      name: "twitter:description",
      content: "Convert images online to WebP, PNG, JPEG formats.",
    },
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
