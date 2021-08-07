  import semver from "semver";
  import DocsManager from "./DocsManager";

  const blacklisted = new Set(["old", "gh-pages", "docs"]); // branches to not include in docs

  export default new DocsManager({
      id: "main", // required: /docs/main
      name: "Main", // source name
      global: "DiscordPlayer", // will append DiscordPlayer. before constructor name
      repo: "Lebyy/discord-voice", // the github repo where your docs are located at
      defaultTag: "rewrite", // /docs/main/master
      docsBranch: "docs", // name of the branch where your docs files are located at
      defaultFile: { // the file shown after loading: /docs/main/master/general/welcome
          id: "welcome",
          category: "general"
      },
      branchFilter: (branch) => !blacklisted.has(branch) && !branch.startsWith("dependabot/"), // if you wanna filter branches
      tagFilter: (tag) => semver.gte(tag.replace(/^v/, ""), "4.1.4") // if you wanna filter tags
  });