import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations
 * support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support
 * only `SLASH_23`.
 */
export const PeeringCidrRange = {
  CidrRangeUnspecified: "CIDR_RANGE_UNSPECIFIED",
  Slash16: "SLASH_16",
  Slash17: "SLASH_17",
  Slash18: "SLASH_18",
  Slash19: "SLASH_19",
  Slash20: "SLASH_20",
  Slash22: "SLASH_22",
  Slash23: "SLASH_23",
} as const;
export type PeeringCidrRange = (typeof PeeringCidrRange)[keyof typeof PeeringCidrRange] | (string & {});

export const peeringCidrRangeSchema: EnumSchema<PeeringCidrRange> =
  s.enumOf<PeeringCidrRange>(PeeringCidrRange);
