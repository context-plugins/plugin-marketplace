import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  websiteVisitsCompanyResultSchema,
  type WebsiteVisitsCompanyResult,
} from "./website-visits-company-result.js";
import { websiteVisitsPaginationSchema, type WebsiteVisitsPagination } from "./website-visits-pagination.js";

export type WebsiteVisitsResponse = {
  requestId?: string;
  results?: WebsiteVisitsCompanyResult[];
  pagination?: WebsiteVisitsPagination;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websiteVisitsResponseSchema: Schema<WebsiteVisitsResponse> = s.object<WebsiteVisitsResponse>(
  {
    requestId: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => websiteVisitsCompanyResultSchema))),
    pagination: s.optional(s.lazy(() => websiteVisitsPaginationSchema)),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  },
  { additionalProperties: s.json() },
);
