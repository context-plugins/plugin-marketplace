import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { facetSchema, type Facet } from "./facet.js";
import { referrersByDomainSchema, type ReferrersByDomain } from "./referrers-by-domain.js";

export type ReferrersByDomains = {
  unit?: string;
  units?: number;
  facet?: Facet;
  unitReference?: string;
  referrersByDomain?: ReferrersByDomain[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referrersByDomainsSchema: Schema<ReferrersByDomains> = s.object<ReferrersByDomains>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    facet: s.optional(s.lazy(() => facetSchema)),
    unitReference: s.optional(s.string()),
    referrersByDomain: s.optional(s.array(s.lazy(() => referrersByDomainSchema))),
    _keysMap: {
      unitReference: "unit_reference",
      referrersByDomain: "referrers_by_domain",
    },
  },
  { additionalProperties: s.json() },
);
