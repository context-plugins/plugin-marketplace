import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubjectType = {
  Business: "business",
  IndividualOrUnverified: "individual_or_unverified",
  Website: "website",
} as const;
export type SubjectType = (typeof SubjectType)[keyof typeof SubjectType] | (string & {});

export const subjectTypeSchema: EnumSchema<SubjectType> = s.enumOf<SubjectType>(SubjectType);
