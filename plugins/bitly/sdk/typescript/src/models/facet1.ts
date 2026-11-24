import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Facet1 = {
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
export type Facet1 = (typeof Facet1)[keyof typeof Facet1] | (string & {});

export const facet1Schema: EnumSchema<Facet1> = s.enumOf<Facet1>(Facet1);
