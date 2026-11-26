import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredFeatureSchema, type RequiredFeature } from "./required-feature.js";

export type PartnerConfigurationOutput = {
  features: RequiredFeature[];
  key: string;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const partnerConfigurationOutputProperties: s.Shape<PartnerConfigurationOutput> = {
  features: s.array(s.lazy(() => requiredFeatureSchema)),
  key: s.string(),
  partnerId: s.int(),
};

export const partnerConfigurationOutputInternalSchema: Schema<PartnerConfigurationOutput> =
  s.object<PartnerConfigurationOutput>(partnerConfigurationOutputProperties, {
    additionalProperties: s.json(),
  });

export const partnerConfigurationOutputSchema: Schema<PartnerConfigurationOutput> = s.lazySchema(() =>
  s.object<PartnerConfigurationOutput>(
    {
      ...partnerConfigurationOutputProperties,
      key: s.string().check(s.minLength(1)),
      partnerId: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
