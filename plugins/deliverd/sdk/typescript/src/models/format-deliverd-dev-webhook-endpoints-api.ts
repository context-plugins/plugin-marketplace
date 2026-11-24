import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FormatDeliverdDevWebhookEndpointsApi = {
  Json: "json",
  Slack: "slack",
  Teams: "teams",
  Discord: "discord",
  WorkspaceStudio: "workspace_studio",
} as const;
export type FormatDeliverdDevWebhookEndpointsApi =
  | (typeof FormatDeliverdDevWebhookEndpointsApi)[keyof typeof FormatDeliverdDevWebhookEndpointsApi]
  | (string & {});

export const formatDeliverdDevWebhookEndpointsApiSchema: EnumSchema<FormatDeliverdDevWebhookEndpointsApi> =
  s.enumOf<FormatDeliverdDevWebhookEndpointsApi>(FormatDeliverdDevWebhookEndpointsApi);
