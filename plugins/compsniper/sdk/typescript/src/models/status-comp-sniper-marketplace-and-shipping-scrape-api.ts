import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCompSniperMarketplaceAndShippingScrapeApi = {
  Queued: "queued",
  Running: "running",
  Done: "done",
  MaxPagesReached: "maxPages_reached",
  Cancelled: "cancelled",
  Failed: "failed",
} as const;
export type StatusCompSniperMarketplaceAndShippingScrapeApi =
  | (typeof StatusCompSniperMarketplaceAndShippingScrapeApi)[keyof typeof StatusCompSniperMarketplaceAndShippingScrapeApi]
  | (string & {});

export const statusCompSniperMarketplaceAndShippingScrapeApiSchema: EnumSchema<StatusCompSniperMarketplaceAndShippingScrapeApi> =
  s.enumOf<StatusCompSniperMarketplaceAndShippingScrapeApi>(StatusCompSniperMarketplaceAndShippingScrapeApi);
