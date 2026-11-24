import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the order. */
export const Status1 = {
  New: "new",
  Processing: "processing",
  Complete: "complete",
  Refunded: "refunded",
  Canceled: "canceled",
  Unknown: "unknown",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
