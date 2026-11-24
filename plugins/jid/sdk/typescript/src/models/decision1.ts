import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Decision1 = {
  Proceed: "proceed",
  Review: "review",
  Stop: "stop",
  InsufficientData: "insufficient_data",
} as const;
export type Decision1 = (typeof Decision1)[keyof typeof Decision1] | (string & {});

export const decision1Schema: EnumSchema<Decision1> = s.enumOf<Decision1>(Decision1);
