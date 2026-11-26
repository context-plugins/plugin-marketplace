import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the vendor is blocked */
export const Blocked2 = {
  Payment: "Payment",
  All: "All",
} as const;
export type Blocked2 = (typeof Blocked2)[keyof typeof Blocked2] | (string & {});

export const blocked2Schema: EnumSchema<Blocked2> = s.enumOf<Blocked2>(Blocked2);
