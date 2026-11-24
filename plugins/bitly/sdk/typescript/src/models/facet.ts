import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Facet = {
  ReferrersByDomains: "referrers_by_domains",
} as const;
export type Facet = (typeof Facet)[keyof typeof Facet] | (string & {});

export const facetSchema: EnumSchema<Facet> = s.enumOf<Facet>(Facet);
