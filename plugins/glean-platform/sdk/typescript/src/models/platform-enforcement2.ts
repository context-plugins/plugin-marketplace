import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enforcement configuration of the tightest finite policy; omitted for unlimited headroom. */
export const PlatformEnforcement2 = {
  Hard: "HARD",
  Soft: "SOFT",
} as const;
export type PlatformEnforcement2 =
  | (typeof PlatformEnforcement2)[keyof typeof PlatformEnforcement2]
  | (string & {});

export const platformEnforcement2Schema: EnumSchema<PlatformEnforcement2> =
  s.enumOf<PlatformEnforcement2>(PlatformEnforcement2);
