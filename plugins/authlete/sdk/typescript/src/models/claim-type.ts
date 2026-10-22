import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClaimType = {
  Normal: "NORMAL",
  Aggregated: "AGGREGATED",
  Distributed: "DISTRIBUTED",
} as const;
export type ClaimType = (typeof ClaimType)[keyof typeof ClaimType] | (string & {});

export const claimTypeSchema: EnumSchema<ClaimType> = s.enumOf<ClaimType>(ClaimType);
