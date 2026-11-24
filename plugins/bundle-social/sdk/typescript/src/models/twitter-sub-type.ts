import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TwitterSubType = {
  None: "none",
  Basic: "basic",
  Premium: "premium",
  PremiumPlus: "premium_plus",
} as const;
export type TwitterSubType = (typeof TwitterSubType)[keyof typeof TwitterSubType] | (string & {});

export const twitterSubTypeSchema: EnumSchema<TwitterSubType> = s.enumOf<TwitterSubType>(TwitterSubType);
