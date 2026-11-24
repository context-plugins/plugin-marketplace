import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listPartnerConfigurationFeaturesFilterInternalSchema,
  listPartnerConfigurationFeaturesFilterSchema,
  type ListPartnerConfigurationFeaturesFilter,
} from "./list-partner-configuration-features-filter.js";
import { requiredPageInternalSchema, requiredPageSchema, type RequiredPage } from "./required-page.js";

export type ListPartnerConfigurationFeaturesRequest = {
  filter: ListPartnerConfigurationFeaturesFilter;
  page: RequiredPage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnerConfigurationFeaturesRequestProperties: s.Shape<ListPartnerConfigurationFeaturesRequest> = {
  filter: listPartnerConfigurationFeaturesFilterInternalSchema,
  page: requiredPageInternalSchema,
};

export const listPartnerConfigurationFeaturesRequestInternalSchema: Schema<ListPartnerConfigurationFeaturesRequest> =
  s.object<ListPartnerConfigurationFeaturesRequest>(listPartnerConfigurationFeaturesRequestProperties, {
    additionalProperties: s.json(),
  });

export const listPartnerConfigurationFeaturesRequestSchema: Schema<ListPartnerConfigurationFeaturesRequest> =
  s.lazySchema(() =>
    s.object<ListPartnerConfigurationFeaturesRequest>(
      {
        ...listPartnerConfigurationFeaturesRequestProperties,
        filter: listPartnerConfigurationFeaturesFilterSchema,
        page: requiredPageSchema,
      },
      { additionalProperties: s.json() },
    ),
  );
