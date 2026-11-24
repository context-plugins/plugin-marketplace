import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloud account type. */
export const CldType = {
  Aws: "AWS",
  Gcp: "GCP",
  Azure: "AZURE",
} as const;
export type CldType = (typeof CldType)[keyof typeof CldType] | (string & {});

export const cldTypeSchema: EnumSchema<CldType> = s.enumOf<CldType>(CldType);
