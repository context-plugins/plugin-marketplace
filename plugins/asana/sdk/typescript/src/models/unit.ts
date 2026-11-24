import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A supported unit of measure for the goal metric, or none. */
export const Unit = {
  None: "none",
  Currency: "currency",
  Percentage: "percentage",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
