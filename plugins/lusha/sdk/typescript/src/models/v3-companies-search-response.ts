import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import { v3CompanyPreviewSchema, type V3CompanyPreview } from "./v3-company-preview.js";

export type V3CompaniesSearchResponse = {
  requestId?: string;
  results?: V3CompanyPreview[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompaniesSearchResponseSchema: Schema<V3CompaniesSearchResponse> =
  s.object<V3CompaniesSearchResponse>(
    {
      requestId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => v3CompanyPreviewSchema))),
      billing: s.optional(s.lazy(() => v3BillingSchema)),
    },
    { additionalProperties: s.json() },
  );
