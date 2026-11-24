import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** approve or reject */
export const Verdict = {
  Approve: "approve",
  Reject: "reject",
} as const;
export type Verdict = (typeof Verdict)[keyof typeof Verdict] | (string & {});

export const verdictSchema: EnumSchema<Verdict> = s.enumOf<Verdict>(Verdict);
