import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tableWriteSchema, type TableWrite } from "./table-write.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import { v3CompanyPreviewSchema, type V3CompanyPreview } from "./v3-company-preview.js";
import { v3PaginationResponseSchema, type V3PaginationResponse } from "./v3-pagination-response.js";

export type V3ProspectingCompaniesResponse = {
  requestId?: string;
  results?: V3CompanyPreview[];
  pagination?: V3PaginationResponse;
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

export const v3ProspectingCompaniesResponseSchema: Schema<V3ProspectingCompaniesResponse> =
  s.object<V3ProspectingCompaniesResponse>(
    {
      requestId: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => v3CompanyPreviewSchema))),
      pagination: s.optional(s.lazy(() => v3PaginationResponseSchema)),
      tableWrite: s.optional(s.lazy(() => tableWriteSchema)),
      billing: s.optional(s.lazy(() => v3BillingSchema)),
    },
    { additionalProperties: s.json() },
  );
