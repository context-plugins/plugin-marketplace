import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Returns whether or not the tier has any active prices. */
export const TierStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type TierStatus = (typeof TierStatus)[keyof typeof TierStatus] | (string & {});

export const tierStatusSchema: EnumSchema<TierStatus> = s.enumOf<TierStatus>(TierStatus);
