import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of review for this approval request */
export const Kind20 = {
  Approve: "approve",
  Comment: "comment",
  Decline: "decline",
} as const;
export type Kind20 = (typeof Kind20)[keyof typeof Kind20] | (string & {});

export const kind20Schema: EnumSchema<Kind20> = s.enumOf<Kind20>(Kind20);
