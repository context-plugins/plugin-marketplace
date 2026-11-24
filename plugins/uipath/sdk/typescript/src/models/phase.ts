import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current phase of the automation in the pipeline */
export const Phase = {
  Idea: "Idea",
  Assessment: "Assessment",
  Analysis: "Analysis",
  Development: "Development",
  Testing: "Testing",
  Production: "Production",
  OnHold: "OnHold",
  Rejected: "Rejected",
} as const;
export type Phase = (typeof Phase)[keyof typeof Phase] | (string & {});

export const phaseSchema: EnumSchema<Phase> = s.enumOf<Phase>(Phase);
