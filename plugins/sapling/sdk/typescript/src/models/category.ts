import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category = {
  Gender: "gender",
  RaceEthnicity: "race_ethnicity",
  Disability: "disability",
  Age: "age",
  Lgbtq: "lgbtq",
  Religion: "religion",
  Socioeconomic: "socioeconomic",
  Appearance: "appearance",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
