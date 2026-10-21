import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enforcement behavior when a usage limit is reached. */
export const PlatformEnforcement = {
  Hard: "HARD",
  Soft: "SOFT",
} as const;
export type PlatformEnforcement =
  | (typeof PlatformEnforcement)[keyof typeof PlatformEnforcement]
  | (string & {});

export const platformEnforcementSchema: EnumSchema<PlatformEnforcement> =
  s.enumOf<PlatformEnforcement>(PlatformEnforcement);
