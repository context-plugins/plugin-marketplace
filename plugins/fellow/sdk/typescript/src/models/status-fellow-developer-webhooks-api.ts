import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Webhook status. Valid values: 'active', 'inactive' */
export const StatusFellowDeveloperWebhooksApi = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type StatusFellowDeveloperWebhooksApi =
  | (typeof StatusFellowDeveloperWebhooksApi)[keyof typeof StatusFellowDeveloperWebhooksApi]
  | (string & {});

export const statusFellowDeveloperWebhooksApiSchema: EnumSchema<StatusFellowDeveloperWebhooksApi> =
  s.enumOf<StatusFellowDeveloperWebhooksApi>(StatusFellowDeveloperWebhooksApi);
