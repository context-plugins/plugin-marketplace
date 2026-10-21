import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Employment status or account type. Absent when the workspace hides the employee type attribute.
 */
export const PlatformPersonType1 = {
  FullTime: "FULL_TIME",
  Contractor: "CONTRACTOR",
  NonEmployee: "NON_EMPLOYEE",
  FormerEmployee: "FORMER_EMPLOYEE",
} as const;
export type PlatformPersonType1 =
  | (typeof PlatformPersonType1)[keyof typeof PlatformPersonType1]
  | (string & {});

export const platformPersonType1Schema: EnumSchema<PlatformPersonType1> =
  s.enumOf<PlatformPersonType1>(PlatformPersonType1);
