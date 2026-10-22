import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of finite headroom; omitted for unlimited headroom. */
export const PlatformUsageUnit2 = {
  Usd: "USD",
  Credits: "CREDITS",
} as const;
export type PlatformUsageUnit2 = (typeof PlatformUsageUnit2)[keyof typeof PlatformUsageUnit2] | (string & {});

export const platformUsageUnit2Schema: EnumSchema<PlatformUsageUnit2> =
  s.enumOf<PlatformUsageUnit2>(PlatformUsageUnit2);
