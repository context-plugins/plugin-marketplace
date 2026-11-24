import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  partnerConfigurationFeatureOutputInternalSchema,
  partnerConfigurationFeatureOutputSchema,
  type PartnerConfigurationFeatureOutput,
} from "./partner-configuration-feature-output.js";

export type ListPartnerConfigurationFeaturesResponse = {
  results: PartnerConfigurationFeatureOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnerConfigurationFeaturesResponseProperties: s.Shape<ListPartnerConfigurationFeaturesResponse> =
  {
    results: s.array(s.lazy(() => partnerConfigurationFeatureOutputInternalSchema)),
  };

export const listPartnerConfigurationFeaturesResponseInternalSchema: Schema<ListPartnerConfigurationFeaturesResponse> =
  s.object<ListPartnerConfigurationFeaturesResponse>(listPartnerConfigurationFeaturesResponseProperties, {
    additionalProperties: s.json(),
  });

export const listPartnerConfigurationFeaturesResponseSchema: Schema<ListPartnerConfigurationFeaturesResponse> =
  s.lazySchema(() =>
    s.object<ListPartnerConfigurationFeaturesResponse>(
      {
        ...listPartnerConfigurationFeaturesResponseProperties,
        results: s.array(s.lazy(() => partnerConfigurationFeatureOutputSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
