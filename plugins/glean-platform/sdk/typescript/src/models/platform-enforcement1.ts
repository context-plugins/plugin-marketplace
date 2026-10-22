import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the limit is enforced when reached. */
export const PlatformEnforcement1 = {
  Hard: "HARD",
  Soft: "SOFT",
} as const;
export type PlatformEnforcement1 =
  | (typeof PlatformEnforcement1)[keyof typeof PlatformEnforcement1]
  | (string & {});

export const platformEnforcement1Schema: EnumSchema<PlatformEnforcement1> =
  s.enumOf<PlatformEnforcement1>(PlatformEnforcement1);
