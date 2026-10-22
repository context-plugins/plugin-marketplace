import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unit for the selected spend domain; must match its billing denomination. Aggregate agent limits
 * use the workspace plan denomination.
 */
export const PlatformUsageUnit1 = {
  Usd: "USD",
  Credits: "CREDITS",
} as const;
export type PlatformUsageUnit1 = (typeof PlatformUsageUnit1)[keyof typeof PlatformUsageUnit1] | (string & {});

export const platformUsageUnit1Schema: EnumSchema<PlatformUsageUnit1> =
  s.enumOf<PlatformUsageUnit1>(PlatformUsageUnit1);
