import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DiscoveryContactCriteria = {
  /** Persona criteria used to rank discovery results */
  persona?: string[];
  contactRegions?: string[];
  contactCountries?: string[];
  contactState?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const discoveryContactCriteriaProperties: s.Shape<DiscoveryContactCriteria> = {
  persona: s.optional(s.array(s.string())),
  contactRegions: s.optional(s.array(s.string())),
  contactCountries: s.optional(s.array(s.string())),
  contactState: s.optional(s.array(s.string())),
};

export const discoveryContactCriteriaInternalSchema: Schema<DiscoveryContactCriteria> =
  s.object<DiscoveryContactCriteria>(discoveryContactCriteriaProperties, { additionalProperties: s.json() });

export const discoveryContactCriteriaSchema: Schema<DiscoveryContactCriteria> = s.lazySchema(() =>
  s.object<DiscoveryContactCriteria>(
    {
      ...discoveryContactCriteriaProperties,
      persona: s.optional(s.array(s.string()).check(s.maxLength(5))),
    },
    { additionalProperties: s.json() },
  ),
);
