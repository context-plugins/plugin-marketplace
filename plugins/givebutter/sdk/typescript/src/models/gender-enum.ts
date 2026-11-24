import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GenderEnum = {
  Male: "male",
  Female: "female",
  Other: "other",
} as const;
export type GenderEnum = (typeof GenderEnum)[keyof typeof GenderEnum] | (string & {});

export const genderEnumSchema: EnumSchema<GenderEnum> = s.enumOf<GenderEnum>(GenderEnum);
