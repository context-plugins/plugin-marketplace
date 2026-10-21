import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the limit has a finite cap or is unlimited. */
export const PlatformAmountMode1 = {
  Finite: "FINITE",
  Unlimited: "UNLIMITED",
} as const;
export type PlatformAmountMode1 =
  | (typeof PlatformAmountMode1)[keyof typeof PlatformAmountMode1]
  | (string & {});

export const platformAmountMode1Schema: EnumSchema<PlatformAmountMode1> =
  s.enumOf<PlatformAmountMode1>(PlatformAmountMode1);
