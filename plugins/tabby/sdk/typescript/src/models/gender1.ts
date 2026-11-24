import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Who the goods are designed to. */
export const Gender1 = {
  Male: "Male",
  Female: "Female",
  Kids: "Kids",
  Other: "Other",
} as const;
export type Gender1 = (typeof Gender1)[keyof typeof Gender1] | (string & {});

export const gender1Schema: EnumSchema<Gender1> = s.enumOf<Gender1>(Gender1);
