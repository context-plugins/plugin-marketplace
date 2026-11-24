import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * * `standard` - standard
 * * `premium` - premium
 * * `premium (feeds disabled)` - premium (feeds disabled)
 * * `bulk` - bulk
 * * `phone` - phone
 * * `enrich` - enrich
 */
export const LookupTypeEnum = {
  Standard: "standard",
  Premium: "premium",
  PremiumFeedsDisabled: "premium (feeds disabled)",
  Bulk: "bulk",
  Phone: "phone",
  Enrich: "enrich",
} as const;
export type LookupTypeEnum = (typeof LookupTypeEnum)[keyof typeof LookupTypeEnum] | (string & {});

export const lookupTypeEnumSchema: EnumSchema<LookupTypeEnum> = s.enumOf<LookupTypeEnum>(LookupTypeEnum);
