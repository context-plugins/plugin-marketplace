import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listCampaignsFilterInternalSchema,
  listCampaignsFilterSchema,
  type ListCampaignsFilter,
} from "./list-campaigns-filter.js";
import { requiredPageInternalSchema, requiredPageSchema, type RequiredPage } from "./required-page.js";

export type ListCampaignsRequest = {
  page: RequiredPage;
  filter?: ListCampaignsFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listCampaignsRequestProperties: s.Shape<ListCampaignsRequest> = {
  page: requiredPageInternalSchema,
  filter: s.optional(s.lazy(() => listCampaignsFilterInternalSchema)),
};

export const listCampaignsRequestInternalSchema: Schema<ListCampaignsRequest> =
  s.object<ListCampaignsRequest>(listCampaignsRequestProperties, { additionalProperties: s.json() });

export const listCampaignsRequestSchema: Schema<ListCampaignsRequest> = s.lazySchema(() =>
  s.object<ListCampaignsRequest>(
    {
      ...listCampaignsRequestProperties,
      page: requiredPageSchema,
      filter: s.optional(s.lazy(() => listCampaignsFilterSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
