import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3BuyingGroupCompanyResultInternalSchema,
  v3BuyingGroupCompanyResultSchema,
  type V3BuyingGroupCompanyResult,
} from "./v3-buying-group-company-result.js";
import { v3PaginationResponseSchema, type V3PaginationResponse } from "./v3-pagination-response.js";

export type V3BuyingGroupResponse = {
  requestId?: string;
  results?: V3BuyingGroupCompanyResult[];
  pagination?: V3PaginationResponse;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3BuyingGroupResponseProperties: s.Shape<V3BuyingGroupResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3BuyingGroupCompanyResultInternalSchema))),
  pagination: s.optional(s.lazy(() => v3PaginationResponseSchema)),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3BuyingGroupResponseInternalSchema: Schema<V3BuyingGroupResponse> =
  s.object<V3BuyingGroupResponse>(v3BuyingGroupResponseProperties, { additionalProperties: s.json() });

export const v3BuyingGroupResponseSchema: Schema<V3BuyingGroupResponse> = s.lazySchema(() =>
  s.object<V3BuyingGroupResponse>(
    {
      ...v3BuyingGroupResponseProperties,
      results: s.optional(s.array(s.lazy(() => v3BuyingGroupCompanyResultSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
