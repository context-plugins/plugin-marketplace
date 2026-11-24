import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmploymentType = {
  EmploymentTypeUnspecified: "EMPLOYMENT_TYPE_UNSPECIFIED",
  FullTime: "FULL_TIME",
  PartTime: "PART_TIME",
  Contractor: "CONTRACTOR",
  ContractToHire: "CONTRACT_TO_HIRE",
  Temporary: "TEMPORARY",
  Intern: "INTERN",
  Volunteer: "VOLUNTEER",
  PerDiem: "PER_DIEM",
  FlyInFlyOut: "FLY_IN_FLY_OUT",
  OtherEmploymentType: "OTHER_EMPLOYMENT_TYPE",
} as const;
export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType] | (string & {});

export const employmentTypeSchema: EnumSchema<EmploymentType> = s.enumOf<EmploymentType>(EmploymentType);
