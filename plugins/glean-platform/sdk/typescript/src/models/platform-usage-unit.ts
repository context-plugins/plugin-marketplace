import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit used by a usage limit and its counters. */
export const PlatformUsageUnit = {
  Usd: "USD",
  Credits: "CREDITS",
} as const;
export type PlatformUsageUnit = (typeof PlatformUsageUnit)[keyof typeof PlatformUsageUnit] | (string & {});

export const platformUsageUnitSchema: EnumSchema<PlatformUsageUnit> =
  s.enumOf<PlatformUsageUnit>(PlatformUsageUnit);
