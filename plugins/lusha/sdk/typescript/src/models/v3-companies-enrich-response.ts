import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableWriteSchema, type TableWrite } from "./table-write.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3EnrichedCompanyInternalSchema,
  v3EnrichedCompanySchema,
  type V3EnrichedCompany,
} from "./v3-enriched-company.js";

export type V3CompaniesEnrichResponse = {
  requestId?: string;
  results?: V3EnrichedCompany[];
  /**
   * Added to a Prospecting, Enrich, Signals, or Lookalike response when `tableId` is passed on the
   * request. The primary response is unaffected even if the table write fails.
   */
  tableWrite?: TableWrite;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompaniesEnrichResponseProperties: s.Shape<V3CompaniesEnrichResponse> = {
  requestId: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => v3EnrichedCompanyInternalSchema))),
  tableWrite: s.optional(s.lazy(() => tableWriteSchema)),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const v3CompaniesEnrichResponseInternalSchema: Schema<V3CompaniesEnrichResponse> =
  s.object<V3CompaniesEnrichResponse>(v3CompaniesEnrichResponseProperties, {
    additionalProperties: s.json(),
  });

export const v3CompaniesEnrichResponseSchema: Schema<V3CompaniesEnrichResponse> = s.lazySchema(() =>
  s.object<V3CompaniesEnrichResponse>(
    {
      ...v3CompaniesEnrichResponseProperties,
      results: s.optional(s.array(s.lazy(() => v3EnrichedCompanySchema))),
    },
    { additionalProperties: s.json() },
  ),
);
