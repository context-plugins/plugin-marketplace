import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  partnerConfigurationFeatureInternalSchema,
  partnerConfigurationFeatureSchema,
  type PartnerConfigurationFeature,
} from "./partner-configuration-feature.js";

export type UpsertPartnerConfigurationFeaturesRequest = {
  /** justtrack's internal ID for the app */
  appId: number;
  configurations: PartnerConfigurationFeature[];
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const upsertPartnerConfigurationFeaturesRequestProperties: s.Shape<UpsertPartnerConfigurationFeaturesRequest> =
  {
    appId: s.int(),
    configurations: s.array(s.lazy(() => partnerConfigurationFeatureInternalSchema)),
    partnerId: s.int(),
  };

export const upsertPartnerConfigurationFeaturesRequestInternalSchema: Schema<UpsertPartnerConfigurationFeaturesRequest> =
  s.object<UpsertPartnerConfigurationFeaturesRequest>(upsertPartnerConfigurationFeaturesRequestProperties, {
    additionalProperties: s.json(),
  });

export const upsertPartnerConfigurationFeaturesRequestSchema: Schema<UpsertPartnerConfigurationFeaturesRequest> =
  s.lazySchema(() =>
    s.object<UpsertPartnerConfigurationFeaturesRequest>(
      {
        ...upsertPartnerConfigurationFeaturesRequestProperties,
        appId: s.int().check(s.gte(1)),
        configurations: s.array(s.lazy(() => partnerConfigurationFeatureSchema)).check(s.minLength(1)),
        partnerId: s.int().check(s.gte(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
