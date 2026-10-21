import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The subscription's current status. */
export const WebhookStatus = {
  Enabled: "enabled",
  Blocked: "blocked",
  Disabled: "disabled",
  Deleted: "deleted",
} as const;
export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus] | (string & {});

export const webhookStatusSchema: EnumSchema<WebhookStatus> = s.enumOf<WebhookStatus>(WebhookStatus);
