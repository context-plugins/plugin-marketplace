import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FacetBitlyCustomBitlinksApi = {
  Countries: "countries",
  Cities: "cities",
  Devices: "devices",
  Referrers: "referrers",
  ReferrersByDomain: "referrers_by_domain",
  ReferringDomains: "referring_domains",
  ReferringNetworks: "referring_networks",
  ShortenCounts: "shorten_counts",
  Destinations: "destinations",
} as const;
export type FacetBitlyCustomBitlinksApi =
  | (typeof FacetBitlyCustomBitlinksApi)[keyof typeof FacetBitlyCustomBitlinksApi]
  | (string & {});

export const facetBitlyCustomBitlinksApiSchema: EnumSchema<FacetBitlyCustomBitlinksApi> =
  s.enumOf<FacetBitlyCustomBitlinksApi>(FacetBitlyCustomBitlinksApi);
