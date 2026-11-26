import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Pattern = {
  OpenMarket: "open_market",
  PlanOrOffering: "plan_or_offering",
  HoldersOnly: "holders_only",
} as const;
export type Pattern = (typeof Pattern)[keyof typeof Pattern] | (string & {});

export const patternSchema: EnumSchema<Pattern> = s.enumOf<Pattern>(Pattern);
