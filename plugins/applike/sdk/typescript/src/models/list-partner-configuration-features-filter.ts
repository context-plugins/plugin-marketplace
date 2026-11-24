import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListPartnerConfigurationFeaturesFilter = {
  /** justtrack's internal ID for the app */
  appId: number;
  /** justtrack's internal ID for the partner */
  partnerId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnerConfigurationFeaturesFilterProperties: s.Shape<ListPartnerConfigurationFeaturesFilter> = {
  appId: s.int(),
  partnerId: s.int(),
};

export const listPartnerConfigurationFeaturesFilterInternalSchema: Schema<ListPartnerConfigurationFeaturesFilter> =
  s.object<ListPartnerConfigurationFeaturesFilter>(listPartnerConfigurationFeaturesFilterProperties, {
    additionalProperties: s.json(),
  });

export const listPartnerConfigurationFeaturesFilterSchema: Schema<ListPartnerConfigurationFeaturesFilter> =
  s.lazySchema(() =>
    s.object<ListPartnerConfigurationFeaturesFilter>(
      {
        ...listPartnerConfigurationFeaturesFilterProperties,
        appId: s.int().check(s.gte(1)),
        partnerId: s.int().check(s.gte(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
