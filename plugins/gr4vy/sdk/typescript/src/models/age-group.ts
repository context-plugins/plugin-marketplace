import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AgeGroup = {
  Adult: "adult",
  Infant: "infant",
} as const;
export type AgeGroup = (typeof AgeGroup)[keyof typeof AgeGroup] | (string & {});

export const ageGroupSchema: EnumSchema<AgeGroup> = s.enumOf<AgeGroup>(AgeGroup);
