import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Registered toolset name (lowercase) accepted by the create-agent gateway. */
export const AgentCreateToolsetName = {
  Calendar: "calendar",
  Clickup: "clickup",
  Confluence: "confluence",
  Confluencedatacenter: "confluencedatacenter",
  Drive: "drive",
  Github: "github",
  Gmail: "gmail",
  Jira: "jira",
  Jiradatacenter: "jiradatacenter",
  Lumos: "lumos",
  Mariadb: "mariadb",
  Onedrive: "onedrive",
  Outlook: "outlook",
  Redshift: "redshift",
  Salesforce: "salesforce",
  Sharepoint: "sharepoint",
  Slack: "slack",
  Teams: "teams",
  Zoom: "zoom",
} as const;
export type AgentCreateToolsetName =
  | (typeof AgentCreateToolsetName)[keyof typeof AgentCreateToolsetName]
  | (string & {});

export const agentCreateToolsetNameSchema: EnumSchema<AgentCreateToolsetName> =
  s.enumOf<AgentCreateToolsetName>(AgentCreateToolsetName);
