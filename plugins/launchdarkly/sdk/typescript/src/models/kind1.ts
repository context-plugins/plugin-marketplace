import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of review action to take */
export const Kind1 = {
  Approve: "approve",
  Decline: "decline",
  Comment: "comment",
} as const;
export type Kind1 = (typeof Kind1)[keyof typeof Kind1] | (string & {});

export const kind1Schema: EnumSchema<Kind1> = s.enumOf<Kind1>(Kind1);
