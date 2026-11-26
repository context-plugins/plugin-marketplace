import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureSchema, type Feature } from "./feature.js";

export type ListPartnerConfigurationsFilter = {
  /** justtrack's internal ID for the partner */
  partnerId?: number;
  feature?: Feature;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnerConfigurationsFilterProperties: s.Shape<ListPartnerConfigurationsFilter> = {
  partnerId: s.optional(s.int()),
  feature: s.optional(s.lazy(() => featureSchema)),
};

export const listPartnerConfigurationsFilterInternalSchema: Schema<ListPartnerConfigurationsFilter> =
  s.object<ListPartnerConfigurationsFilter>(listPartnerConfigurationsFilterProperties, {
    additionalProperties: s.json(),
  });

export const listPartnerConfigurationsFilterSchema: Schema<ListPartnerConfigurationsFilter> = s.lazySchema(
  () =>
    s.object<ListPartnerConfigurationsFilter>(
      {
        ...listPartnerConfigurationsFilterProperties,
        partnerId: s.optional(s.int().check(s.gte(1))),
      },
      { additionalProperties: s.json() },
    ),
);
