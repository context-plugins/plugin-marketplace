import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Facet1BitlyGroupsApi = {
  Countries: "countries",
  Cities: "cities",
  Devices: "devices",
  Referrers: "referrers",
  ReferrersByDomain: "referrers_by_domain",
  ReferringDomains: "referring_domains",
  ReferringNetworks: "referring_networks",
  ShortenCounts: "shorten_counts",
} as const;
export type Facet1BitlyGroupsApi =
  | (typeof Facet1BitlyGroupsApi)[keyof typeof Facet1BitlyGroupsApi]
  | (string & {});

export const facet1BitlyGroupsApiSchema: EnumSchema<Facet1BitlyGroupsApi> =
  s.enumOf<Facet1BitlyGroupsApi>(Facet1BitlyGroupsApi);
