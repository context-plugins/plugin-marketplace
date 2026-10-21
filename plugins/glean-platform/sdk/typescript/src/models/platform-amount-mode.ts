import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of configured cap or remaining headroom. */
export const PlatformAmountMode = {
  Finite: "FINITE",
  Unlimited: "UNLIMITED",
} as const;
export type PlatformAmountMode = (typeof PlatformAmountMode)[keyof typeof PlatformAmountMode] | (string & {});

export const platformAmountModeSchema: EnumSchema<PlatformAmountMode> =
  s.enumOf<PlatformAmountMode>(PlatformAmountMode);
