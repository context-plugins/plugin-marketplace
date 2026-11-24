import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The tier of the service. */
export const Tier = {
  TierUnspecified: "TIER_UNSPECIFIED",
  Developer: "DEVELOPER",
  Enterprise: "ENTERPRISE",
} as const;
export type Tier = (typeof Tier)[keyof typeof Tier] | (string & {});

export const tierSchema: EnumSchema<Tier> = s.enumOf<Tier>(Tier);
