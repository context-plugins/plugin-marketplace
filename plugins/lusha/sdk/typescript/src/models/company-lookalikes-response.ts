import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyLookalikesMetaSchema, type CompanyLookalikesMeta } from "./company-lookalikes-meta.js";
import { tableWriteSchema, type TableWrite } from "./table-write.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3LookAlikeCompanyResultSchema,
  type V3LookAlikeCompanyResult,
} from "./v3-look-alike-company-result.js";

export type CompanyLookalikesResponse = {
  dedupeSessionId: string;
  results: V3LookAlikeCompanyResult[];
  meta: CompanyLookalikesMeta;
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

export const companyLookalikesResponseSchema: Schema<CompanyLookalikesResponse> =
  s.object<CompanyLookalikesResponse>(
    {
      dedupeSessionId: s.string(),
      results: s.array(s.lazy(() => v3LookAlikeCompanyResultSchema)),
      meta: companyLookalikesMetaSchema,
      tableWrite: s.optional(s.lazy(() => tableWriteSchema)),
      billing: s.optional(s.lazy(() => v3BillingSchema)),
    },
    { additionalProperties: s.json() },
  );
