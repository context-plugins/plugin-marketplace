import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventKey = {
  FomcDecision: "fomc_decision",
  FomcMinutes: "fomc_minutes",
  Cpi: "cpi",
  Ppi: "ppi",
  Nfp: "nfp",
  Gdp: "gdp",
  Pce: "pce",
  RetailSales: "retail_sales",
  JoblessClaims: "jobless_claims",
  Jolts: "jolts",
} as const;
export type EventKey = (typeof EventKey)[keyof typeof EventKey] | (string & {});

export const eventKeySchema: EnumSchema<EventKey> = s.enumOf<EventKey>(EventKey);
