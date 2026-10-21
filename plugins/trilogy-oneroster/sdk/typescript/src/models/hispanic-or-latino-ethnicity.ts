import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HispanicOrLatinoEthnicity = {
  True: "true",
  False: "false",
} as const;
export type HispanicOrLatinoEthnicity =
  | (typeof HispanicOrLatinoEthnicity)[keyof typeof HispanicOrLatinoEthnicity]
  | (string & {});

export const hispanicOrLatinoEthnicitySchema: EnumSchema<HispanicOrLatinoEthnicity> =
  s.enumOf<HispanicOrLatinoEthnicity>(HispanicOrLatinoEthnicity);
