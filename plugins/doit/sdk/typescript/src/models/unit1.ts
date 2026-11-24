import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Time interval unit for shifting. */
export const Unit1 = {
  Day: "day",
  Month: "month",
  Quarter: "quarter",
  Year: "year",
} as const;
export type Unit1 = (typeof Unit1)[keyof typeof Unit1] | (string & {});

export const unit1Schema: EnumSchema<Unit1> = s.enumOf<Unit1>(Unit1);
