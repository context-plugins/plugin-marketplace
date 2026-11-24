import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `queued` only for the moment the message is being handed over (a list can catch it); the send
 * answers `sent` or `failed`.
 */
export const Status1 = {
  Queued: "queued",
  Sent: "sent",
  Delivered: "delivered",
  Delayed: "delayed",
  Bounced: "bounced",
  Complained: "complained",
  Failed: "failed",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
