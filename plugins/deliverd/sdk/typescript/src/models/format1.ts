import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card for
 * a Workflows webhook. discord: an embed with a link button for a channel webhook.
 * workspace_studio: fires a Google Workspace Studio starter; made by the Deliverd add-on, with
 * runAs.
 */
export const Format1 = {
  Json: "json",
  Slack: "slack",
  Teams: "teams",
  Discord: "discord",
  WorkspaceStudio: "workspace_studio",
} as const;
export type Format1 = (typeof Format1)[keyof typeof Format1] | (string & {});

export const format1Schema: EnumSchema<Format1> = s.enumOf<Format1>(Format1);
