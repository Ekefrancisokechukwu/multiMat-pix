import type { FileType } from "~/welcome/Welcome";

const BASE_URL = "https://multimat-pix-server.onrender.com";

export async function uploadImage(file: File): Promise<{
  original: string;
  formats: { [key: string]: FileType };
}> {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload image");
  }

  const data = await res.json();
  return data;
}
