import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Pattern1 = {
  OpenMarket: "open_market",
  PlanOrOffering: "plan_or_offering",
  HoldersOnly: "holders_only",
  All: "all",
} as const;
export type Pattern1 = (typeof Pattern1)[keyof typeof Pattern1] | (string & {});

export const pattern1Schema: EnumSchema<Pattern1> = s.enumOf<Pattern1>(Pattern1);
