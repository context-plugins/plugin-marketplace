import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether remaining headroom is finite or unlimited. */
export const PlatformAmountMode2 = {
  Finite: "FINITE",
  Unlimited: "UNLIMITED",
} as const;
export type PlatformAmountMode2 =
  | (typeof PlatformAmountMode2)[keyof typeof PlatformAmountMode2]
  | (string & {});

export const platformAmountMode2Schema: EnumSchema<PlatformAmountMode2> =
  s.enumOf<PlatformAmountMode2>(PlatformAmountMode2);
