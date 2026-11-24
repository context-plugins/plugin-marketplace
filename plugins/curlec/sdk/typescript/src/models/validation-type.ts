import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** penniless = reverse penny drop (UPI intent); optimized = system chooses best method */
export const ValidationType = {
  Pennydrop: "pennydrop",
  Penniless: "penniless",
  Optimized: "optimized",
} as const;
export type ValidationType = (typeof ValidationType)[keyof typeof ValidationType] | (string & {});

export const validationTypeSchema: EnumSchema<ValidationType> = s.enumOf<ValidationType>(ValidationType);
