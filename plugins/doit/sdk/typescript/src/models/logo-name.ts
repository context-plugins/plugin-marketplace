import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An optional preset logo shown next to the dataset in the DoiT console. */
export const LogoName = {
  Anthropic: "anthropic",
  Atlassian: "atlassian",
  Aws: "aws",
  Azure: "azure",
  Bifrost: "bifrost",
  Chatgpt: "chatgpt",
  Cloudflare: "cloudflare",
  Copilot: "copilot",
  Figma: "figma",
  Gcp: "gcp",
  Github: "github",
  Gitlab: "gitlab",
  Hotjar: "hotjar",
  Jira: "jira",
  Litellm: "litellm",
  Miro: "miro",
  Notion: "notion",
  Slack: "slack",
  Wordpress: "wordpress",
} as const;
export type LogoName = (typeof LogoName)[keyof typeof LogoName] | (string & {});

export const logoNameSchema: EnumSchema<LogoName> = s.enumOf<LogoName>(LogoName);
