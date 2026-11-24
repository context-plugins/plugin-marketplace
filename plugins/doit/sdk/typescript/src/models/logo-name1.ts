import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The preset logo shown next to the dataset in the DoiT console. Omit to keep the current logo;
 * send an empty string to clear it.
 */
export const LogoName1 = {
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
export type LogoName1 = (typeof LogoName1)[keyof typeof LogoName1] | (string & {});

export const logoName1Schema: EnumSchema<LogoName1> = s.enumOf<LogoName1>(LogoName1);
