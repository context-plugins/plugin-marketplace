import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Assessment = {
  Business: "business",
  IndividualOrUnverified: "individual_or_unverified",
} as const;
export type Assessment = (typeof Assessment)[keyof typeof Assessment] | (string & {});

export const assessmentSchema: EnumSchema<Assessment> = s.enumOf<Assessment>(Assessment);
