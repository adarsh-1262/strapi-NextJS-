import React from "react";

async function getAboutData() {
  const res = await fetch("http://localhost:1337/api/about?populate=*", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }
  const json = await res.json();
  return json.data;
}

const About = async () => {
  const aboutData = await getAboutData();

  if (!aboutData) {
    return <div className="text-center text-red-500 mt-10">No About Data Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">{aboutData.title}</h1>
      
      <div className="space-y-10">
        {aboutData.blocks.map((block) => {
          switch (block.__component) {
            case "shared.quote":
              return (
                <blockquote 
                  key={block.id} 
                  className="border-l-4 border-blue-500 pl-6 italic text-gray-700"
                >
                  <p className="mb-2">"{block.body}"</p>
                  <footer className="text-right font-semibold text-gray-900">— {block.title}</footer>
                </blockquote>
              );

            case "shared.rich-text":
              return (
                <div
                  key={block.id}
                  className="prose prose-indigo max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: block.body
                      .replace(/\n/g, "<br />")
                      .replace(/# (.*$)/gim, "<h2>$1</h2>")
                      .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>"),
                  }}
                />
              );

            case "shared.media":
              return (
                <div 
                  key={block.id} 
                  className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center text-gray-500"
                >
                  [Media component placeholder]
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default About;
