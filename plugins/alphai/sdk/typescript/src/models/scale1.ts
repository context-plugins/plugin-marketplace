import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The multiplier `numeric` is expressed in, by the same rules as a `key_metrics` row. A bare
 * segment figure takes the table header's scale only when the segments then fit under the read's
 * own revenue line; otherwise null. Added 2026-10-01 to every stored read.
 */
export const Scale1 = {
  Ones: "ones",
  Thousands: "thousands",
  Millions: "millions",
  Billions: "billions",
  Trillions: "trillions",
} as const;
export type Scale1 = (typeof Scale1)[keyof typeof Scale1] | (string & {});

export const scale1Schema: EnumSchema<Scale1> = s.enumOf<Scale1>(Scale1);
