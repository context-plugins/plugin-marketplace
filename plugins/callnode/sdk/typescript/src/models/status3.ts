import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status3 = {
  Queued: "queued",
  Sent: "sent",
  Delivered: "delivered",
  Delayed: "delayed",
  Bounced: "bounced",
  Complained: "complained",
  Failed: "failed",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
