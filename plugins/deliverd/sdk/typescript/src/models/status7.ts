import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status7 = {
  Open: "open",
  Verified: "verified",
  Complete: "complete",
  Expired: "expired",
} as const;
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
