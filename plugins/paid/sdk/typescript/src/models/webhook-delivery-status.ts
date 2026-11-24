import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookDeliveryStatus = {
  Success: "success",
  Failed: "failed",
} as const;
export type WebhookDeliveryStatus =
  | (typeof WebhookDeliveryStatus)[keyof typeof WebhookDeliveryStatus]
  | (string & {});

export const webhookDeliveryStatusSchema: EnumSchema<WebhookDeliveryStatus> =
  s.enumOf<WebhookDeliveryStatus>(WebhookDeliveryStatus);
