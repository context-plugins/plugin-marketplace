import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Defines the type of Confidential Compute technology to use. */
export const ConfidentialInstanceType = {
  ConfidentialInstanceTypeUnspecified: "CONFIDENTIAL_INSTANCE_TYPE_UNSPECIFIED",
  Sev: "SEV",
  SevSnp: "SEV_SNP",
  Tdx: "TDX",
} as const;
export type ConfidentialInstanceType =
  | (typeof ConfidentialInstanceType)[keyof typeof ConfidentialInstanceType]
  | (string & {});

export const confidentialInstanceTypeSchema: EnumSchema<ConfidentialInstanceType> =
  s.enumOf<ConfidentialInstanceType>(ConfidentialInstanceType);
