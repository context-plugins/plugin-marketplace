import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DegreeType = {
  DegreeTypeUnspecified: "DEGREE_TYPE_UNSPECIFIED",
  PrimaryEducation: "PRIMARY_EDUCATION",
  LowerSecondaryEducation: "LOWER_SECONDARY_EDUCATION",
  UpperSecondaryEducation: "UPPER_SECONDARY_EDUCATION",
  AdultRemedialEducation: "ADULT_REMEDIAL_EDUCATION",
  AssociatesOrEquivalent: "ASSOCIATES_OR_EQUIVALENT",
  BachelorsOrEquivalent: "BACHELORS_OR_EQUIVALENT",
  MastersOrEquivalent: "MASTERS_OR_EQUIVALENT",
  DoctoralOrEquivalent: "DOCTORAL_OR_EQUIVALENT",
} as const;
export type DegreeType = (typeof DegreeType)[keyof typeof DegreeType] | (string & {});

export const degreeTypeSchema: EnumSchema<DegreeType> = s.enumOf<DegreeType>(DegreeType);
