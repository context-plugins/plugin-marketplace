import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status40 = {
  Pending: "PENDING",
  Sent: "SENT",
  Delivered: "DELIVERED",
  Seen: "SEEN",
  Failed: "FAILED",
} as const;
export type Status40 = (typeof Status40)[keyof typeof Status40] | (string & {});

export const status40Schema: EnumSchema<Status40> = s.enumOf<Status40>(Status40);
