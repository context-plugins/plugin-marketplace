import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BuildOrBuy = {
  Build: "build",
  Buy: "buy",
  Hybrid: "hybrid",
} as const;
export type BuildOrBuy = (typeof BuildOrBuy)[keyof typeof BuildOrBuy] | (string & {});

export const buildOrBuySchema: EnumSchema<BuildOrBuy> = s.enumOf<BuildOrBuy>(BuildOrBuy);
