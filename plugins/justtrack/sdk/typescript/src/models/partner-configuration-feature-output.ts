import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PartnerConfigurationFeatureOutput = {
  /** justtrack's internal ID for the app */
  appId: number;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  key: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const partnerConfigurationFeatureOutputProperties: s.Shape<PartnerConfigurationFeatureOutput> = {
  appId: s.int(),
  partnerId: s.int(),
  key: s.string(),
  value: s.string(),
};

export const partnerConfigurationFeatureOutputInternalSchema: Schema<PartnerConfigurationFeatureOutput> =
  s.object<PartnerConfigurationFeatureOutput>(partnerConfigurationFeatureOutputProperties, {
    additionalProperties: s.json(),
  });

export const partnerConfigurationFeatureOutputSchema: Schema<PartnerConfigurationFeatureOutput> =
  s.lazySchema(() =>
    s.object<PartnerConfigurationFeatureOutput>(
      {
        ...partnerConfigurationFeatureOutputProperties,
        appId: s.int().check(s.gte(1)),
        partnerId: s.int().check(s.gte(1)),
        key: s.string().check(s.minLength(1)),
        value: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
