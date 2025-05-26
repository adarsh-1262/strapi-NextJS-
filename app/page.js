import React from "react";

async function getHomeData() {
  const res = await fetch("http://localhost:1337/api/about?populate=*", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  const json = await res.json();
  return json.data?.title || "Default Title";
}

const Home = async () => {
  const aboutTitle = await getHomeData();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 px-6">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Welcome to Our Blog</h1>
      <p className="text-xl text-gray-700 max-w-xl text-center">{aboutTitle}</p>
    </main>
  );
};

export default Home;
