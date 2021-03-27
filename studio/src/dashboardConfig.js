export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605f33a5fd0e7cc231baa83a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f64g9acv",
                  apiId: "816798b6-0d92-4754-bb65-cadb73d9a140",
                },
                {
                  buildHookId: "605f33a5b72fdfbe5745f5ea",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5n8uxpg8",
                  apiId: "201801c8-f3d7-4a22-91f7-11c2a6b71164",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/superusernils/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5n8uxpg8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
