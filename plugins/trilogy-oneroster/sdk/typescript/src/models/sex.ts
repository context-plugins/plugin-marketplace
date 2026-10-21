import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sex = {
  Male: "male",
  Female: "female",
  Other: "other",
  Unspecified: "unspecified",
} as const;
export type Sex = (typeof Sex)[keyof typeof Sex] | (string & {});

export const sexSchema: EnumSchema<Sex> = s.enumOf<Sex>(Sex);
