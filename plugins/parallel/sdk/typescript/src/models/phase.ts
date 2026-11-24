import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Phase = {
  Commentary: "commentary",
  FinalAnswer: "final_answer",
} as const;
export type Phase = (typeof Phase)[keyof typeof Phase] | (string & {});

export const phaseSchema: EnumSchema<Phase> = s.enumOf<Phase>(Phase);
