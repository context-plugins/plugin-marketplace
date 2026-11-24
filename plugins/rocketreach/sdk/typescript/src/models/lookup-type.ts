import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LookupType = {
  Standard: "standard",
  Premium: "premium",
  PremiumFeedsDisabled: "premium (feeds disabled)",
  Bulk: "bulk",
  Phone: "phone",
  Enrich: "enrich",
} as const;
export type LookupType = (typeof LookupType)[keyof typeof LookupType] | (string & {});

export const lookupTypeSchema: EnumSchema<LookupType> = s.enumOf<LookupType>(LookupType);
