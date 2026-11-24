import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The subtype of the custom audience */
export const Subtype = {
  Custom: "CUSTOM",
  Website: "WEBSITE",
  App: "APP",
  OfflineConversion: "OFFLINE_CONVERSION",
  Claim: "CLAIM",
  Partner: "PARTNER",
  Managed: "MANAGED",
  Video: "VIDEO",
  Lookalike: "LOOKALIKE",
  Engagement: "ENGAGEMENT",
} as const;
export type Subtype = (typeof Subtype)[keyof typeof Subtype] | (string & {});

export const subtypeSchema: EnumSchema<Subtype> = s.enumOf<Subtype>(Subtype);
