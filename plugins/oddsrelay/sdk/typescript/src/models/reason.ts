import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** `account_suspended` only. */
export const Reason = {
  Payment: "payment",
  Terms: "terms",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
