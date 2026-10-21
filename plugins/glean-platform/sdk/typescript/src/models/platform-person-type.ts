import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Person employment status or account type. */
export const PlatformPersonType = {
  FullTime: "FULL_TIME",
  Contractor: "CONTRACTOR",
  NonEmployee: "NON_EMPLOYEE",
  FormerEmployee: "FORMER_EMPLOYEE",
} as const;
export type PlatformPersonType = (typeof PlatformPersonType)[keyof typeof PlatformPersonType] | (string & {});

export const platformPersonTypeSchema: EnumSchema<PlatformPersonType> =
  s.enumOf<PlatformPersonType>(PlatformPersonType);
