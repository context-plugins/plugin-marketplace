import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The decision for this invocation only. Rejection follows normal workflow behavior. */
export const Decision = {
  Approve: "APPROVE",
  Reject: "REJECT",
} as const;
export type Decision = (typeof Decision)[keyof typeof Decision] | (string & {});

export const decisionSchema: EnumSchema<Decision> = s.enumOf<Decision>(Decision);
