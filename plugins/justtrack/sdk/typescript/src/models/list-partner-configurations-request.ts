import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listPartnerConfigurationsFilterInternalSchema,
  listPartnerConfigurationsFilterSchema,
  type ListPartnerConfigurationsFilter,
} from "./list-partner-configurations-filter.js";
import { requiredPageInternalSchema, requiredPageSchema, type RequiredPage } from "./required-page.js";

export type ListPartnerConfigurationsRequest = {
  filter?: ListPartnerConfigurationsFilter;
  page: RequiredPage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnerConfigurationsRequestProperties: s.Shape<ListPartnerConfigurationsRequest> = {
  filter: s.optional(s.lazy(() => listPartnerConfigurationsFilterInternalSchema)),
  page: requiredPageInternalSchema,
};

export const listPartnerConfigurationsRequestInternalSchema: Schema<ListPartnerConfigurationsRequest> =
  s.object<ListPartnerConfigurationsRequest>(listPartnerConfigurationsRequestProperties, {
    additionalProperties: s.json(),
  });

export const listPartnerConfigurationsRequestSchema: Schema<ListPartnerConfigurationsRequest> = s.lazySchema(
  () =>
    s.object<ListPartnerConfigurationsRequest>(
      {
        ...listPartnerConfigurationsRequestProperties,
        filter: s.optional(s.lazy(() => listPartnerConfigurationsFilterSchema)),
        page: requiredPageSchema,
      },
      { additionalProperties: s.json() },
    ),
);
