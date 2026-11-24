import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3SearchAndEnrichCompanyResultInternalSchema,
  v3SearchAndEnrichCompanyResultSchema,
  type V3SearchAndEnrichCompanyResult,
} from "./v3-search-and-enrich-company-result.js";

export type V3CompaniesSearchAndEnrichResponse = {
  requestId?: string;
  results?: V3SearchAndEnrichCompanyResult[];
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompaniesSearchAndEnrichResponseProperties: s.Shape<V3CompaniesSearchAndEnrichResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3SearchAndEnrichCompanyResultInternalSchema))),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3CompaniesSearchAndEnrichResponseInternalSchema: Schema<V3CompaniesSearchAndEnrichResponse> =
  s.object<V3CompaniesSearchAndEnrichResponse>(v3CompaniesSearchAndEnrichResponseProperties, {
    additionalProperties: s.json(),
  });

export const v3CompaniesSearchAndEnrichResponseSchema: Schema<V3CompaniesSearchAndEnrichResponse> =
  s.lazySchema(() =>
    s.object<V3CompaniesSearchAndEnrichResponse>(
      {
        ...v3CompaniesSearchAndEnrichResponseProperties,
        results: s.optional(s.array(s.lazy(() => v3SearchAndEnrichCompanyResultSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
