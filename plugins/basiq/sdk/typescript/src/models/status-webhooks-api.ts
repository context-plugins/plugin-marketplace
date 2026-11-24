import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** status of the webhook. */
export const StatusWebhooksApi = {
  Active: "active",
  PendingApproval: "pending-approval",
} as const;
export type StatusWebhooksApi = (typeof StatusWebhooksApi)[keyof typeof StatusWebhooksApi] | (string & {});

export const statusWebhooksApiSchema: EnumSchema<StatusWebhooksApi> =
  s.enumOf<StatusWebhooksApi>(StatusWebhooksApi);
