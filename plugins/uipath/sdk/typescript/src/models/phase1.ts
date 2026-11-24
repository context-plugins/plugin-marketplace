import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Updated pipeline phase for the automation */
export const Phase1 = {
  Idea: "Idea",
  Assessment: "Assessment",
  Analysis: "Analysis",
  Development: "Development",
  Testing: "Testing",
  Production: "Production",
  OnHold: "OnHold",
  Rejected: "Rejected",
} as const;
export type Phase1 = (typeof Phase1)[keyof typeof Phase1] | (string & {});

export const phase1Schema: EnumSchema<Phase1> = s.enumOf<Phase1>(Phase1);
