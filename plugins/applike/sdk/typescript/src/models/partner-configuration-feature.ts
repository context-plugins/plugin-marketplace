import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PartnerConfigurationFeature = {
  key: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const partnerConfigurationFeatureProperties: s.Shape<PartnerConfigurationFeature> = {
  key: s.string(),
  value: s.string(),
};

export const partnerConfigurationFeatureInternalSchema: Schema<PartnerConfigurationFeature> =
  s.object<PartnerConfigurationFeature>(partnerConfigurationFeatureProperties, {
    additionalProperties: s.json(),
  });

export const partnerConfigurationFeatureSchema: Schema<PartnerConfigurationFeature> = s.lazySchema(() =>
  s.object<PartnerConfigurationFeature>(
    {
      ...partnerConfigurationFeatureProperties,
      key: s.string().check(s.minLength(1)),
      value: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
