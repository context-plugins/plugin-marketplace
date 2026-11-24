import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Delivery status of a send. `not_found` means no send with this id exists on the campaign,
 * including a send that has not been processed yet.
 */
export const SendStatus = {
  Sent: "sent",
  Delivered: "delivered",
  Bounced: "bounced",
  Failed: "failed",
  Dropped: "dropped",
  NotFound: "not_found",
} as const;
export type SendStatus = (typeof SendStatus)[keyof typeof SendStatus] | (string & {});

export const sendStatusSchema: EnumSchema<SendStatus> = s.enumOf<SendStatus>(SendStatus);
